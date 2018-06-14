import React, { Component } from 'react';
import './home.css';
import $ from 'jquery';
import TableRow from './tablerow';
//import {Link} from 'react-router-dom'


class Home extends Component {
    componentDidMount(){
        $('.grid-list').each(function(){

			var a = Math.ceil(Math.random()*7)	
			var diamond = $(this).children().eq(a);
			$(diamond).addClass('diamond');
			/*if(diamond){
				$('.diamond').append('<span class="glyphicon glyphicon-star"></span>')	
			}*/
		});
		$('.square').on('click',function(){
			$('.hint').removeClass('hint')
			if($(this).hasClass('diamond')){
				$(this).html('')
				$(this).append('<span class="glyphicon glyphicon-star"></span>')
				/*$(this).find('.diamond .glyphicon-star').css("visibility","visible");*/
			}
			else{
				$(this).html('')
				var hint = $(this).parents('.grid-list');
				/*if(hind.indexOf() !=0 ){*/
					$(hint).find('.diamond').addClass('hint')
					$()	
				/*}*/
			}
		})
    }
 
 render() {
     return (
     <div class="header">
        <h1 align="center">Diamond Game</h1>
        <div class="container">
		<div class="row">
			<div id="grid-block">
			<TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
            <TableRow/>
			
			</div>
		</div>
	</div>
    </div>
    
     );
 }
}

export default Home;