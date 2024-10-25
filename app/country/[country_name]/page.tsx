export default function CountryName({params}:any) {

    const countries:{
       name:string,
       population:number,
        capital:string,
    }[] =[{
        name:"Pakistan",
        population:240000000,
        capital:"Islamabad",
    },
    {
        name:"India",
        population:1400000000,
        capital:"Dehli",
    },
    {
        name:"Korea",
        population:52000000,
        capital:"Seoul.",
    },
    {
        name:"Japan",
        population:12500000,
        capital:"Tokyo.",
    },


    ];

function findCountry(country_url:string){ 
    return countries.find (country=>country.name.toLowerCase()== country_url.toLowerCase()); 
}

let result = findCountry(params.country_name);


    return(
        <div>
            {
                result ?(

           <>
            <h1>Country Name: {result.name }</h1>
            <h1>Country Capital:{result.capital}</h1>
            <h1>Country Population:{result.population}</h1>
            </>
        ):(
            <h1>Country Not Found</h1>
        )
        }
        </div>
    );
}