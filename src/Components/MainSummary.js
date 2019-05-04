import React from 'react'
import SummaryTotal from './SummaryTotal'

export default function MainSummary (props) {

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <SummaryTotal selected={props.selected}/>
  
    </section>
  )
}