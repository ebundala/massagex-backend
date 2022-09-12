console.log("seed running");
import { Prisma,PrismaClient } from "@prisma/client"
import { join } from "path";
import { PrismaAdapter,CasbinService } from "@mechsoft/enforcer";

const categories: Prisma.CategoryCreateInput[] = [
    {
        name: 'Massage & SPA',
        
        picture:{
            create:{
                path:"icons/massageicon.png",
                mimetype: "image/png",
                filename: "massageicon.png"   
            }
        }
        
    },
    { name: 'Food', picture:{
        create:{
            path:"icons/foodicon.png",
            mimetype: "image/png",
            filename: "foodicon.png"

        }
    }},
    { name: 'Cleaner', 
    picture:{
        create:{
            path:"icons/cleanericon.png",
            mimetype: "image/png",
            filename: "cleaner.png"

        }
    } },
    { name: 'Gas filler', 
    picture:{
        create:{
            path:"icons/gasicon.png",
            mimetype: "image/png",
            filename: "gasicon.png"

        }
    }}
]

const paymentMethods: Prisma.PaymentMethodCreateInput [] = [
    {
        name: "Vodacom M-Pesa",
        code: "VMCASHIN",
        logo:{
            create:{
                path:"icons/mpesa.png"
            }
        }
    },
    {
        name: "Tigo Pesa",
        code: "TPCASHIN",
        logo:{
            create:{
                path:"icons/tigo.png"
            }
        }
    },
    {
        name: "Airtel money",
        code: "AMCASHIN",
        logo:{
            create:{
                path:"icons/airtel.png"
            }
        }
    },
    {
        name: "T-Pesa",
        code: "TTCASHIN",
        logo:{
            create:{
                path:"icons/ttcl.png"
            }
        }
    },
    {
        name: "Hallo pesa",
        code: "HPCASHIN",
        logo:{
            create:{
                path:"icons/halopesa.png"
            }
        }
    },
    {
        name: "Selcom Pay",
        code: "SPCASHIN",
        logo:{
            create:{
                path:"icons/selcom.png"
            }
        }
    }
];

const favTypes: Prisma.FavoriteRecordTypeCreateInput[] = [
    {
        name:"User"
    },
    {
        name:"Business"
    },
    {
        name:"Review"
    },
    {
        name:"Comment"
    },
    {
        name:"Service"
    },
    {
        name:"Order"
    }
]

const abuseTypes: Prisma.AbuseRecordTypeCreateInput[] = [
    {
        name:"User"
    },
    {
        name:"Business"
    },
    {
        name:"Review"
    },
    {
        name:"Comment"
    },
    {
        name:"Service"
    },
    {
        name:"Order"
    }
]

// const getDefaultPolicies = async () => {
//    const su = new SUPERUSER();
//    const mn= new MANAGER();
//    const pv = new PROVIDER();
//    const cs = new CONSUMER();
//    const an = new ANONYMOUS();

//     //;
//     const superUser = getRolePolicies(su)
//     const manager = getRolePolicies(mn)
//     const provider = getRolePolicies(pv)
//     const consumer = getRolePolicies(cs)
//     const anonymous = getRolePolicies(an)
//     //Roles grouping and inheritance
//     const superUserG = getRoleGrouping(su)
//     const managerG = getRoleGrouping(mn)
//     const providerG = getRoleGrouping(pv)
//     const consumerG = getRoleGrouping(cs)
//     const anonymousG = getRoleGrouping(an)

    
//     superUserG.push(...managerG, ...providerG, ...consumerG, ...anonymousG);
//     superUser.push(...manager,...provider,...consumer,...anonymous);
//     return { roleGroups: superUserG, policies: superUser };
// }

const seedDatabase = async () => {
    const options = {
        path: join(process.cwd(), 'src/authorization/rbac_model.conf'),
        adapter: await PrismaAdapter.newAdapter({
            log: ['error', 'info', 'query', 'warn'],
        })

    }
     const casbin = new CasbinService(options);
     await casbin.init();
    // const { policies, roleGroups } = await getDefaultPolicies();
     const cl = (casbin.getAdapter() as PrismaAdapter);
         
    // await cl.prisma.casbinRule.deleteMany();
    // await cl.prisma.casbinRule.createMany({
    //     skipDuplicates:true,
    //     data:roleGroups.map(([v0,v1,v2,v3,v4,v5],i)=>{
    //         return {
    //             ptype:'g',
    //             v0,v1,v2,v3,v4,v5
    //         }
    //     }).concat(policies.map(([v0,v1,v2,v3,v4,v5],i)=>{
    //         return {
    //             ptype:'p',
    //             v0,v1,v2,v3,v4,v5
    //         }
    //     }))
    // });

 //Categories
    const exists = (await cl.prisma.category.findMany({
        where: {
            name: {
                mode: 'insensitive',
                in: categories.map((v) => v.name)
            }
        }, select: { name: true }
    }))?.map((v) => v.name) ?? [];

    const tr = categories.filter((v) => !exists.includes(v.name)
    ).map((v) => cl.prisma.category.create({ data: v }));
    if (tr.length)
        await cl.prisma.$transaction(tr);



    //Payment Method
        const exists1 = (await cl.prisma.paymentMethod.findMany({
            where: {
                name: {
                    mode: 'insensitive',
                    in: paymentMethods.map((v) => v.name)
                }
            }, select: { name: true }
        }))?.map((v) => v.name) ?? [];

        const tr1 = paymentMethods.filter((v) => !exists1.includes(v.name)
        ).map((v) => cl.prisma.paymentMethod.create({ data: v }));
        if (tr1.length)
            await cl.prisma.$transaction(tr1);

    //fav types
    const exists2 = (await cl.prisma.favoriteRecordType.findMany({
        where: {
            name: {
                mode: 'insensitive',
                in: favTypes.map((v) => v.name)
            }
        }, select: { name: true }
    }))?.map((v) => v.name) ?? [];

    const tr2 = favTypes.filter((v) => !exists2.includes(v.name)
    ).map((v) => cl.prisma.favoriteRecordType.create({ data: v }));
    if (tr2.length)
        await cl.prisma.$transaction(tr2);


    //abuse types
    const exists3 = (await cl.prisma.abuseRecordType.findMany({
        where: {
            name: {
                mode: 'insensitive',
                in: abuseTypes.map((v) => v.name)
            }
        }, select: { name: true }
    }))?.map((v) => v.name) ?? [];

    const tr3 = favTypes.filter((v) => !exists3.includes(v.name)
    ).map((v) => cl.prisma.abuseRecordType.create({ data: v }));
    if (tr3.length)
        await cl.prisma.$transaction(tr3);

    return cl.close();
}

export default async function(){
  await seedDatabase().then(() => console.log('completed')).catch(console.error)
console.log('completed')
}

