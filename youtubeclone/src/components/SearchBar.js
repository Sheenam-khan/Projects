import React, { Component } from 'react'
import {Paper,TextField} from '@material-ui/core'

class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchTerm:'',
        }
    }
    
    handleChange =(event)=>{    this.setState({ searchTerm:event.target.value })}

    handleSubmit=(e)=>{
        e.preventDefault();
const {searchTerm} =this.state
const {onFormSubmit}=this.props

onFormSubmit(searchTerm)
console.log(this.props)
    }

    render() {
        return (
         <Paper elevation={6} style={{padding:'25px'}}>
             <form onSubmit={this.handleSubmit}>
             <TextField fullWidth label="Search..."
             onChange={this.handleChange.bind(this)}
             />     
             </form>
         </Paper>
        )
    }
}

export default SearchBar
