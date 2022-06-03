// Was going to use data from motorsportstat.com
// But their JSONs have an api key that cannot be found in HTTP header

// Here is an alternative source for calendar: https://github.com/sportstimes/f1/tree/main/_db
// The downside of this source is that it could be updated manually. 

async function Get_Calendar_Data() {


    // https://github.com/sportstimes/f1/blob/main/_db/f1/2022.json
    let Formula1_Calendar = await GetData("https://raw.githubusercontent.com/sportstimes/f1/main/_db/f1/2022.json",
                                          "GET",
                                          {});

    // https://www.fiaformula2.com/Calendar
    let Formula2_Calendar = await GetData("https://api.formula1.com/v1/f2f3-fom-results/races?website=f2",
                                          "GET",
                                          {"apikey":"Ij4Lwi0yPPhuTstW1hhmmd9ntwTGhjNe"});

    // https://www.fiaformula3.com/Calendar
    let Formula3_Calendar = await GetData("https://api.formula1.com/v1/f2f3-fom-results/races?website=f3",
                                          "GET",
                                          {"apikey":"uwwf2TIPm5aMRFIAUfjwF5HQBMWAGSeE"});

    // https://github.com/sportstimes/f1/blob/main/_db/fe/2022.json                                          
    let FormulaE_Calendar = await GetData("https://raw.githubusercontent.com/sportstimes/f1/main/_db/fe/2022.json",
                                          "GET",
                                          {});
       

    return [Formula1_Calendar, Formula2_Calendar, Formula3_Calendar, FormulaE_Calendar];
}
