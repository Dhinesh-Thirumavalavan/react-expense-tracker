import React, { useState } from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
width:100%;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`
const Balance=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
font-size:18px;
font-weight:bold;
`
const AddButton=styled.button`
background-color:black;
color:white;
border-radius:4px;
padding:5px 10px;
font-size:20px;
cursor: pointer;

`
const AddTransactionContainer=styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
gap:10px;
padding:10px 15px;
margin:10px 20px;
width:100%;
& input{
    outline:none;
    padding:10px 15px;
    border:1px solid black;
    border-radius:4px;
}
`
const RadioBox=styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
& input{
    width:unset;
    margin:0px 10px;
}
`
const ExpenseContainer=styled.div`
display:flex;
flex-direction:row;
gap:12px;
margin:20px;
`

const ExpenseBox=styled.div`
display:flex;
flex-direction:column;
border-radius:4px;
border:1px solid black;
padding:15px 20px;
width:135px;
font-size:14px;
& span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`


const AddTransactionview = (props) => {
    const [amount,setamount]=useState("")
    const [desc,setdesc]=useState('')
    const [type,settype]=useState("EXPENSE")
    const addTransaction=()=>{
        props.addTransactions({amount:Number(amount),desc,type,id:Date.now()});
props.ToggleAddTxn()
    }
  return (
    <AddTransactionContainer>
      <input placeholder='Amount' value={amount} type='number' onChange={(e)=>setamount(e.target.value)}/>
      <input placeholder='Description'value={desc} onChange={(e)=>setdesc(e.target.value)}/>
      <RadioBox>
        <input type='radio' id='expense' name='type' value='EXPENSE' checked={type==='EXPENSE'} onChange={(e)=>settype(e.target.value)} />
        <label htmlFor='expense'>EXPENSE</label>
        <input type='radio' id='income' name='type' value='INCOME' checked={type==='INCOME'} onChange={(e)=>settype(e.target.value)}/>
        <label htmlFor='income'>INCOME</label>
        </RadioBox>
      <AddButton onClick={addTransaction}>Add Transaction</AddButton>
    </AddTransactionContainer>
  )
}



function Overview(props) {
    const [isAddtxnvisible,ToggleAddTxn]=useState(false);
  return (
    <Container>
      <Balance>Balance:{props.income-props.expense}
      <AddButton onClick={()=>ToggleAddTxn(!isAddtxnvisible)}>{isAddtxnvisible?"Cancel":"Add"}</AddButton>
       </Balance>
      {isAddtxnvisible&&<AddTransactionview ToggleAddTxn={ToggleAddTxn} addTransactions={props.addTransactions}/> } 
      <ExpenseContainer>
        <ExpenseBox >
            Expense<span>{props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
            Income<span>{props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  )
}

export default Overview
