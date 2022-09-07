import { Prisma } from '@prisma/client';
import { BusinessWhereInput } from 'src/models/graphql';

export const buildGeoQuery = (
  where: BusinessWhereInput,
  take: number,
  skip: number,
) => {
  const { location, category } = where;
  if (location?.is && location.is?.nearBy) {
    const { nearBy, within, notWithin, nearByName } = location.is;

    return Prisma.sql`SELECT id,distance FROM
     (SELECT "Business"."id" as id, 
     COUNT("Service"."id") as services,
     ST_Distance('SRID=4326;POINT(${nearBy.lat} ${
      nearBy.lon
    })'::geometry, "Location"."geom") as distance
     FROM "Business" 
     INNER JOIN "Service"
     ON "Business"."id" = "Service"."businessId"
     LEFT OUTER JOIN "Location" 
     ON "Business"."id" = "Location"."id"
     ${
       category?.id?.equals
         ? `WHERE "Service"."categoryId"=${category?.id?.equals}`
         : ``
     }
     GROUP BY "Business"."id","Location"."geom"
     ORDER BY "distance" ASC 
     ${take ? `OFFSET ${skip ?? 0} LIMIT ${take}` : ``}
     ) 
     AS businesses
     ${
       within
         ? `WHERE distance <= ${within}`
         : notWithin
         ? `WHERE distance >= ${notWithin}`
         : ``
     }`;
  }
};
