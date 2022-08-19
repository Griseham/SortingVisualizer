import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';




const ANIMATION_SPEED_MS = 20;

const NUMBER_OF_ARRAY_BARS = 50;

const PRIMARY_COLOR = 'blue';

const SECONDARY_COLOR = 'red';



export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };

    

    

  }


  render() {
    const {array} = this.state;
    const name = '';

    

    return (
      <div className="array-container">
        {
        array.map((value, idx) => (
          
          <div
            className="array-bar"

            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              width: 10,
              fontSize: 10,
              width: 10,
              marginLeft: 4,
              marginRight: 4,
              
              height: `${value}px`,
            }}
          >





          </div>
          
          
            
            
        ))}

        <br></br>

        
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        
        
      </div>
      


    );

    
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
      


    }

    


    


    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const newAnimations = [];
    for (const animation of animations){
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }
    for (let i = 0; i < newAnimations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }



  


 

 

  



  
}


function randomIntFromInterval(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
  
}
