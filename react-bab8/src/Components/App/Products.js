import React,{useReducer}  from "react";




const data = [ 
    {
    type: "buah" , 
    value: 5 , 
    name : "melon"
} , 
    { 
        type: "hewan" , 
        value: 6 ,
        name : "lebah" 

    } , 
    {
    type:"kendaraan" , 
    value: 7, 
    name: "motor "

} 
]

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

function getTotal(klik){ 
    const total = klik.reduce((totalCost, item) => totalCost + item.value, 0)
    return total.toLocaleString(undefined , currencyOptions)
}

function reducer(state, action) { 

    switch(action.type) { 
        case ("add") :
        return [...state , action.data1]
        case ("remove") : 
        const index = [...state] 
        const hasilIndex = index.findIndex(( p) => p.name === action.data1.name)
        if(hasilIndex <  0) { 
            return 
        }
        
        index.splice(hasilIndex , 1) ; 
        return index ; 
        default: 
        return state; 
        
    } ; 




}

export default function Produk() { 
    // mengatur state nya 
    const  [ klik , setClick] = useReducer(reducer , []) ; 
// mengoper suatu objek ke setcart untuk di gunakan oleh callback usereduce 
    function add(data1) { 
        setClick( { data1 , type: "add"} ) 
 

} 

    function remove(data1) { 
        setClick({data1 , type: "remove"})
    }
    
    

     return(
        <div> 
        <div className="wrapper">  </div>
        <div className="kalimat">total klik adalah {getTotal(klik)} </div>

        { 
            data.map(data1 => (
                <div key={data1.type}> 
                <h1 className={data1.type}>{data1.type}</h1> 
                <button className="button" onClick={()=>add(data1)}>klik add</button>
                <button className="button2" onClick={()=> remove(data1)}>klik remove</button></div>
            ))
        }
        
       
        </div>
        

        
        

        
     )
}


