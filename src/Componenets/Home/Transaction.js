import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:30px 0 20px;
font-size:18px;
width:100%;
gap:10px;
font-weight:bold;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
& input {
  padding:10px 12px;
  border-radius:12px;
  background:white;
  outline:none;
  border:1px solid black;
  width:100%;
}
`
const Cell=styled.div`
display:flex;
flex-direction:row;
padding:10px 15px;
border-radius:2px;
font-size:14px;
border:1px solid black;
border-right:4px solid ${(props)=>props.isExpense?'red':'green'};
justify-content:space-between;
width:100%;
`

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload.type==='EXPENSE'}>
      <span>{props.payload.desc}</span>
      <span>{props.payload.amount}</span>
    </Cell>
  )
}




function Transaction(props) {
  const [searchtext,updatesearchtext]=useState('')
  const [filteredtransaction,updatefilteredtransaction]=useState(props.transactions)
const filterdata=(searchtext)=>{
  if(!searchtext||!searchtext.trim().length){
    updatefilteredtransaction(props.transactions)
    return;
  }
let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchtext.toLowerCase().trim())
    );
    
    updatefilteredtransaction(txn);
   
  }
  useEffect(() => {
    filterdata(searchtext);
  }, [props.transactions]);
  return (
    <Container>
      Transaction
      <input placeholder='search' value={searchtext} onChange={(e)=>{updatesearchtext(e.target.value); filterdata(e.target.value)}}/>
      {filteredtransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
  )}

export default Transaction
