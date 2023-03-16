import React, { useEffect, useState } from 'react'
import Overview from './Overview'
import Transaction from './Transaction'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 20px;
width:360px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
function Home() {
    const [transactions,updatetransactions]=useState([])
    const [expense,updateexpense]=useState(0)
    const [income,updateincome]=useState(0)
    const addTransactions=(payload)=>{
const transactionarray=[...transactions]
transactionarray.push(payload);
updatetransactions(transactionarray);
console.log(payload);
    }

    const CalculateBalance=()=>{
      let exp=0;
      let inc=0;
      transactions.map((payload)=>{
        payload.type==='EXPENSE'?exp=exp+payload.amount:inc=inc+payload.amount
      })
      updateexpense(exp);
      updateincome(inc);
    }
    useEffect(()=>CalculateBalance(),[transactions])
  return (
    <Container>
      <Overview addTransactions={addTransactions} expense={expense} income={income}/>
      <Transaction transactions={transactions}/>
    </Container>
  )
}

export default Home
