documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosTop(i, j){
    return cellSpace + i*(cellSpace+cellSideLength);
}

function getPosLeft(i, j){
    return cellSpace + j*(cellSpace+cellSideLength);
}

function getNumberBackgroudColor(number){
    switch(number){
        case 2: return "#eee4da"; break;
        case 4: return "#ede0c8"; break;
        case 8: return "#f2b179"; break;
        case 16: return "#f59563"; break;
        case 32: return "#f67c5f"; break;
        case 64: return "#f65e3b"; break;
        case 128: return "#edcf72"; break;
        case 256: return "#64da77";break;
        case 512: return "#9c0"; break;
        case 1024: return "#33b5e5"; break;
        case 2048: return "#09c"; break;
        case 4096: return "#a63"; break;
        case 8192: return "#93c"; break;
    }
    return "#000";
}

function getNumberColor(number){
    if(number <= 4){
        return "#776e65";
    }
    return "#fff";
}

function nospace(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

function canMoveLeft(board){
    for(var i=0; i<4; i++){
        for(var j=1; j<4; j++){
            //判断是否存在数字
            if(board[i][j] != 0){
                // 判断左侧是否有数字？或者左侧的数字是否和自身相等
                if(board[i][j-1] == 0 || board[i][j-1] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board){
    for(var i=0; i<4; i++){
        for(var j=2; j>=0; j--){
            //判断是否存在数字
            if(board[i][j] != 0){
                if(board[i][j+1] == 0 || board[i][j+1] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board){
    for(var j=0; j<4; j++){
        for(var i=1; i<4; i++){
            //判断是否存在数字
            if(board[i][j] != 0){
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board){
    for(var j=0; j<4; j++){
        for(var i=2; i>=0; i--){
            //判断是否存在数字
            if(board[i][j] != 0){
                if(board[i+1][j] == 0 || board[i+1][j] == board[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

// 判断左右阻挡物
function noBlockHorizontal(row,col1,col2,board){
    for(var i=col1+1; i<col2; i++){
        // 如果存在不为0的元素，即存在障碍物
        if(board[row][i] != 0){
            return false;
        }
    }
    return true;
}

// 判断上下阻挡物
function noBlockVertical(col,row1,row2,board){
    for(var i=row1+1; i<row2; i++){
        // 如果存在不为0的元素，即存在障碍物
        if(board[i][col] != 0){
            return false;
        }
    }
    return true;
}

function nomove(board){
    if( canMoveLeft(board) ||
        canMoveRight(board) ||
        canMoveUp(board) ||
        canMoveDown(board) ){
        return false;
    }
    return true;
}