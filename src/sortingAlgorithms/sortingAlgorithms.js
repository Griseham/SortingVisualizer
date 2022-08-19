

export function getMergeSortAnimations(array){

    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);


    return animations;

}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
    let k = startIdx;
    //k for original array
    let i = startIdx;
    //i for first half of array that we are sorting 
    let j = middleIdx + 1;
    //j for second half of the array that we are sorting

    while (i <= middleIdx && j <= endIdx){
        //while i has not reached the end of its array and j has not reached the end of its array
        animations.push([i,j]);
        //change their color as they are being compared
        animations.push([i,j]);
        //revert their color after comparison

        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            //comparing which value to put in main array first
            animations.push([k, auxiliaryArray[i]]);
            //pushing smaller value to animation array
            mainArray[k++] = auxiliaryArray[i++];
            //incrementing both i index and k index after we pushed a value into the present index
        }else{
            //does the same thing but in the case that j is smaller than i
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx){
        //if there are leftover numbers in the i part of the array
        animations.push([i, i]);
        animations.push([i,i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx){
        //if there are leftover numbers in the secondhalf (j) part of the array 
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }


}




