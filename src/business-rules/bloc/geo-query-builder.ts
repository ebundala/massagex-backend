import { Prisma } from '@prisma/client';
import { BusinessWhereInput } from 'src/models/graphql';

export const buildGeoQuery = (
  where: BusinessWhereInput,
  take: number,
  skip: number,
) => {
  const { location, category,...restWhere } = where;
  if (location?.is && location.is?.nearBy) {
    const { nearBy, within, notWithin, nearByName,...rest } = location.is;
    location.is = {...rest};
    where = {location,...restWhere};

    return Prisma.sql`SELECT id,distance FROM
     (SELECT "Business"."id" as id, 
     COUNT("Service"."id") as services,
     ST_Distance(ST_SetSRID(ST_MakePoint(${nearBy.lon
    }, ${nearBy.lat}), 4326), "Location"."geom") as distance
     FROM "Business" 
     INNER JOIN "Service"
     ON "Business"."id" = "Service"."businessId"
     LEFT OUTER JOIN "Location" 
     ON "Business"."id" = "Location"."id"
     ${
       category?.id?.equals
         ? Prisma.sql`WHERE "Service"."categoryId"=${category?.id?.equals}`
         : Prisma.empty
     }
     GROUP BY "Business"."id","Location"."geom"
     ORDER BY "distance" ASC 
     ${take ? Prisma.sql`OFFSET ${skip ?? 0} LIMIT ${take}` : Prisma.empty}
     ) 
     AS businesses
     ${
       within
         ? Prisma.sql`WHERE distance <= ${within}`
         : notWithin
         ? Prisma.sql`WHERE distance >= ${notWithin}`
         : Prisma.empty
     }`;
  }
};
