//% weight=98 color=#FF8C00 icon="\uf0ad" block="A plus B"
namespace tools {
 
    // 計算A+B，不回傳，只顯示在Microbit上
    
    //% blockId="shownumberplus" block="show number A %A +  B %B"
    //% blockGap=2 weight=5 inlineInputMode=inline
    export function ShowPlus(A: number, B: number): void {
        basic.showNumber(A + B)
    }
    
    // 計算A+B，並回傳
 
    //% blockId="numberplus" block="A %A + B %B"
    //% blockGap=2 weight=1
    export function ReturnPlus(A: number, B: number): number {
        return A + B
    }

    //%blockId="PauseFreq" block="PauseFrequency: %freq"
    //%weight=87 blockGap=0 freq.min=0 freq.max=3000
    export function frequency(freq: number): void {
        basic.pause(freq)
    }

    export enum Operator{
        //% block="+"
        Add = 1,
        //% block="-"
        Subtract = 2,
        //% block="*"
        Multiply = 3,
        //% block="/"
        Divide = 4
    }
    //% blockId="MathMenu" block=" %A %oper %B"
    export function Operation(A: number, oper: Operator, B:number ): number {
        switch (oper) {
            case Operator.Add: return A+B;
            case Operator.Subtract: return A-B;
            case Operator.Multiply: return A*B;
            case Operator.Divide: return A/B;
        }
    }
}

