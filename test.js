// // // Q.1

const { count } = require("console");


function printLeaders(arr, size){
    for (let i= 0; i<size; i++){
        let j;
        for(j=i+1; j<size; j++){
            if (arr[i]<= arr[j])
            break;
        }
        if (j==size)
        console.log(arr[i]+" ");
    }

}
let arr = [3, 12, 34, 2, 0, -1]
let n = arr.length;
 printLeaders(arr, n)




// //Q.2. Print the following pattern for the given number of rows.

function pattern(str){
    
    for(let j=0; j>1; j--){
        console.log(i)
        str= str+j
    }
    for(let i=1; i<n; i++){
        str= str+1
    }
}

let str = ""
console.log(str)


//Q.3.

function target(nums, v){
    let count_less = 0
    let count_target= 0;
    for(let i= 0; i< nums.length; i++){
        if (nums[i]==v)
        count_target ++;
        if(nums[i]<v)
        count_less ++;
    }
    let result = []
    while (count_target --){
        result.push(count_less ++);
    }
    return result;
}

let nums = [1,2,5,2,3];
let v = 2;
let result = target(nums,v);

for (let i=0; i<result.length; i++){
    console.log (result[i]+ " ")
}



// Q.4.

function sumDiagonalArry(array){
    let m = 4;
    let sum=0;
    for (let i=0; i<m; i++){
        for(let j=0; j<m; j++){
            if (i==j || (i+j)== m-1){
                sum= sum+ array[i][j];
            }
            else if (i==0 || j==0 || i ==m-1 || j==m-1){
                sum = sum + array[i][j];
            }
        }
    }

    console.log(sum);
}

let array = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
sumDiagonalArry(array);



//Q.5.

function extraCharacer( strA, StrB){
    let res = 0;
    for(let i=0; i<strA.length; i++){
        res^=strA.charCodeAt(i);

    }
    for (let i = 0; i < strB.length; i++){
         res ^= strB.charCodeAt(i);
    }
    return res;
}

let strA = "abcd";
let strB = "abcde";
console.log(String.fromCharCode(extraCharacer(strA, strB)))



//Q.5.

function lengthWord(arr3){
    let ans=[]
    for(let i= 0; i<arr3.length; i++){
        ans.push(arr3[i].length)
    }
    for(let j= i; j<ans.length; j++){
        for(let j= i; j<ans.length; j++){
        if (ans[i] === ans[j]){
            return ans[i] * ans[j]
        }
    }
}
return 0
}
console.log(lengthWord(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))