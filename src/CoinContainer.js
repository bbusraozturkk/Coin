import React, { Component } from 'react';
import  choice  from './Helpers'; 
import Coin from './Coin'



class CoinContainer extends Component {
    static defaultProps = {
        coins:[
            {
                side:"tail",
                imgSrc:"https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"
            },
            {
                side:"heads",
                imgSrc:"https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i"
            }
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips:0,
            nTails:0,
            nHeads:0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState((st) => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tail" ? 1 : 0),
            };
        });
    }

    handleClick(e){
this.flipCoin()
    }

    render(){
        return(
            <div>
                <h1>Madeni para oyunu</h1>
                {this.state.currCoin &&<Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Fırlat!!</button>
                <p>Yapılan Toplam Fırlatma {this.state.nFlips}, bunların {this.state.nTails} yazı ve {this.state.nHeads} tanesi de turadır</p>
            </div>
        )
    }
}
export default CoinContainer