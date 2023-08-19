let table=[
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  
  function checkCashRegister(price, cash, cid) {
    let difference=cash-price;
    let change={status:"",change:[]};
    let length= cid.length;
    let total=0;
    for(let i=length-1;i>=0;i--){
      total+=cid[i][1];
    }
    if(total<difference){
      change.status="INSUFFICIENT_FUNDS";
    }else if (total===difference){
      change.status="CLOSED";
      change.change=cid.slice(0);
    }else {
      change.status="OPEN";
      for(let i=length-1;i>=0;i--){
        let num = cid[i][1];
        let value = table[i][1];
        let count = 0;    
        while(difference>=value && num>0){
        difference-=value;
        difference = Math.round(difference * 100) / 100;
        num-=value;
        num = Math.round(num * 100) / 100;
        count++;
      }
      if(count>0){
        change.change.push([table[i][0],count*value])
      }
    }
    if(difference>0){
      change.status = "INSUFFICIENT_FUNDS";
      change.change=[];
    }
    }
  return change;
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);