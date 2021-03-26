let good_info = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    },

    getGoodName() {
        return(this.displayedName.displayedName.value[0]);
    }, 

    getStockWithGood() {
        let all_stocks = this.stock.stocks["34"];
        let stck_wth_gd = [];
        for ( let stck in all_stocks )
        {                   
            if (all_stocks[stck] != "0") stck_wth_gd.push(stck);
        }
        return (stck_wth_gd);
    },

    getStockWithMaxCountOfGood() {        
        let all_stocks = this.stock.stocks["34"];
        let stck_max_cnt_gd = {
            stock: undefined,
            count: "0"
        }
        if (all_stocks != undefined)
        {
            for ( let stck in all_stocks )
            {                   
                if (Number(all_stocks[stck]) > Number(stck_max_cnt_gd.count))
                {
                    stck_max_cnt_gd.stock = stck;
                    stck_max_cnt_gd.count = all_stocks[stck]; 
                }
            }
        }
        return (stck_max_cnt_gd);
    }


}

console.log(good_info.getGoodName());

let stck_wth_gd = good_info.getStockWithGood();

for (let i = 0; i < stck_wth_gd.length; i++)
    console.log(stck_wth_gd[i]);

let stck_max_cnt_gd = good_info.getStockWithMaxCountOfGood();
if (stck_max_cnt_gd.stock != undefined)
{
    console.log(stck_max_cnt_gd.stock);
    console.log(stck_max_cnt_gd.count);
}
