class Board
{
    #alphabet =    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,';
    #letterWidth = '44444444034444646444444445443433330220533334234242234144444444301';
    #alphabetMapping = {};
    #canvas;
    #ctx;

    constructor(id){
        this.#canvas = document.getElementById(id);
        /** @type {CanvasRenderingContext2D} */
        this.width = this.#canvas.width;
        this.height = this.#canvas.height;
        this.#ctx = this.#canvas.getContext("2d");
        this.#ctx.fillStyle = "#1b1b1b";
        this.#ctx.fillRect(0, 0, this.width, this.height);
        this.pixel = 3;
        this.lineSpacing = 10;
        this.padding = this.pixel * 2;
        this.xPos = this.padding;
        this.yPos = this.padding;
    
        // Mapping alphabet letters with their respective widths
        for (let i = 0; i < this.#alphabet.length; i++) {
            this.#alphabetMapping[this.#alphabet[i]] = Number(this.#letterWidth[i]);
        }
    }
    drawPixel(x, y)
    {
        this.#ctx.fillRect(x * this.pixel + this.xPos, y * this.pixel + this.yPos, this.pixel, this.pixel);
    }
    drawChar(char)
    {
        switch (char)
        {
            case ' ':
                break;
            case '.':
                this.drawPixel(0, 7);
                break;
            case ',':
                this.drawPixel(0, 7);
                this.drawPixel(1, 6);
                break;
            case 'A':
                this.drawPixel(2, 0);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(3, 1);
                this.drawPixel(3, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                this.drawPixel(3, 4);
                break;
            case 'B':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 3);
                this.drawPixel(1, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                break;
            case 'C':
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(1, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 6);
                break;
            case 'D':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 1);
                this.drawPixel(4, 2);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(3, 6);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                break;
            case 'E':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(4, 7);
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                break;
            case 'F':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                break;
            case 'G':
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(1, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(3, 4);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                break;
            case 'H':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                break;
            case 'I':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                break;
            case 'J':
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 0);
                this.drawPixel(3, 1);
                this.drawPixel(3, 2);
                this.drawPixel(3, 3);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                break;
            case 'K':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 3);
                this.drawPixel(2, 4);
                this.drawPixel(2, 2);
                this.drawPixel(3, 5);
                this.drawPixel(3, 1);
                this.drawPixel(4, 6);
                this.drawPixel(4, 0);
                this.drawPixel(4, 7);
                break;
            case 'L':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 7);
                break;
            case 'M':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                this.drawPixel(1, 1);
                this.drawPixel(2, 2);
                this.drawPixel(3, 1);
                break;
            case 'N':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(2, 3);
                this.drawPixel(2, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                break;
            case 'O':
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(1, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 6);
                this.drawPixel(5, 1);
                this.drawPixel(6, 2);
                this.drawPixel(6, 3);
                this.drawPixel(6, 4);
                this.drawPixel(6, 5);
                this.drawPixel(5, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 7);
                break;
            case 'P':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 3);
                this.drawPixel(1, 3);
                break;
            case 'Q':
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(1, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 6);
                this.drawPixel(5, 1);
                this.drawPixel(6, 2);
                this.drawPixel(6, 3);
                this.drawPixel(6, 4);
                this.drawPixel(6, 5);
                this.drawPixel(5, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 7);
                this.drawPixel(6, 7);
                this.drawPixel(4, 5);
                break;
            case 'R':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 3);
                this.drawPixel(1, 3);
                this.drawPixel(3, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                break;
            case 'S':
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 6);
                this.drawPixel(4, 5);
                this.drawPixel(3, 4);
                this.drawPixel(2, 3);
                this.drawPixel(1, 3);
                this.drawPixel(0, 2);
                this.drawPixel(0, 1);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                break;
            case 'T':
                this.drawPixel(0, 0);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(2, 1);
                this.drawPixel(2, 2);
                this.drawPixel(2, 3);
                this.drawPixel(2, 4);
                this.drawPixel(2, 5);
                this.drawPixel(2, 6);
                this.drawPixel(2, 7);
                break;
            case 'U':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 6);
                this.drawPixel(4, 5);
                this.drawPixel(4, 4);
                this.drawPixel(4, 4);
                this.drawPixel(4, 3);
                this.drawPixel(4, 2);
                this.drawPixel(4, 1);
                this.drawPixel(4, 0);
                break;
            case 'V':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(1, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 6);
                this.drawPixel(3, 5);
                this.drawPixel(3, 4);
                this.drawPixel(4, 3);
                this.drawPixel(4, 2);
                this.drawPixel(4, 1);
                this.drawPixel(4, 0);
                break;
            case 'W':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 5);
                this.drawPixel(2, 4);
                this.drawPixel(3, 6);
                this.drawPixel(3, 7);
                this.drawPixel(4, 5);
                this.drawPixel(4, 4);
                this.drawPixel(4, 3);
                this.drawPixel(4, 2);
                this.drawPixel(4, 1);
                this.drawPixel(4, 0);
                break;
            case 'X':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(1, 2);
                this.drawPixel(2, 3);
                this.drawPixel(3, 4);
                this.drawPixel(3, 2);
                this.drawPixel(1, 4);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(4, 7);
                break;
            case 'Y':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(1, 2);
                this.drawPixel(1, 3);
                this.drawPixel(3, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 4);
                this.drawPixel(2, 5);
                this.drawPixel(2, 6);
                this.drawPixel(2, 7);
                break;
            case 'Z':
                this.drawPixel(0, 0);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(5, 0);
                this.drawPixel(5, 1);
                this.drawPixel(4, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 4);
                this.drawPixel(1, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 7);
                this.drawPixel(5, 7);
                break;
            case 'a':
                this.drawPixel(0, 6);
                this.drawPixel(0, 5);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(4, 7);
                this.drawPixel(3, 4);
                break;
            case 'b':
                this.drawPixel(1, 0);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(1, 3);
                this.drawPixel(1, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(0, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 6);
                this.drawPixel(4, 5);
                this.drawPixel(4, 4);
                this.drawPixel(3, 3);
                this.drawPixel(2, 3);
                break;
            case 'c':
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                break;
            case 'd':
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 0);
                this.drawPixel(3, 1);
                this.drawPixel(3, 2);
                this.drawPixel(3, 3);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(4, 7);
                break;
            case 'e':
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(0, 6);
                this.drawPixel(1, 5);
                this.drawPixel(2, 5);
                this.drawPixel(0, 5);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                this.drawPixel(3, 5);
                break;
            case 'f':
                this.drawPixel(2, 0);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(0, 3);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(1, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                this.drawPixel(3, 1);
                break;
            case 'g':
                this.drawPixel(0, 5);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                this.drawPixel(3, 5);
                this.drawPixel(1, 6);
                this.drawPixel(2, 6);
                this.drawPixel(3, 7);
                this.drawPixel(2, 8);
                this.drawPixel(1, 8);
                break;
            case 'h':
                this.drawPixel(0, 7);
                this.drawPixel(0, 6);
                this.drawPixel(0, 5);
                this.drawPixel(0, 4);
                this.drawPixel(0, 3);
                this.drawPixel(0, 2);
                this.drawPixel(0, 1);
                this.drawPixel(0, 0);
                this.drawPixel(1, 4);
                this.drawPixel(2, 3);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(3, 7);
                break;
            case 'i':
                this.drawPixel(0, 7);
                this.drawPixel(0, 6);
                this.drawPixel(0, 5);
                this.drawPixel(0, 4);
                this.drawPixel(0, 3);
                this.drawPixel(0, 1);
                break;
            case 'j':
                this.drawPixel(2, 1);
                this.drawPixel(2, 3);
                this.drawPixel(2, 4);
                this.drawPixel(2, 5);
                this.drawPixel(2, 6);
                this.drawPixel(2, 7);
                this.drawPixel(0, 7);
                this.drawPixel(1, 8);
                break;
            case 'k':
                this.drawPixel(0, 7);
                this.drawPixel(0, 6);
                this.drawPixel(0, 5);
                this.drawPixel(0, 4);
                this.drawPixel(0, 3);
                this.drawPixel(0, 2);
                this.drawPixel(0, 1);
                this.drawPixel(0, 0);
                this.drawPixel(1, 5);
                this.drawPixel(2, 4);
                this.drawPixel(2, 6);
                this.drawPixel(2, 7);
                break;
            case 'l':
                this.drawPixel(0, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                break;
            case 'm':
                this.drawPixel(0, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 4);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(3, 7);
                this.drawPixel(4, 4);
                this.drawPixel(5, 4);
                this.drawPixel(5, 5);
                this.drawPixel(5, 6);
                this.drawPixel(5, 7);
                break;
            case 'n':
                this.drawPixel(0, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 4);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(3, 7);
                break;
            case 'o':
                this.drawPixel(0, 6);
                this.drawPixel(0, 5);
                this.drawPixel(1, 4);
                this.drawPixel(2, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                break;
            case 'p':
                this.drawPixel(0, 4);
                this.drawPixel(1, 5);
                this.drawPixel(2, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(1, 8);
                break;
            case 'q':
                this.drawPixel(3, 4);
                this.drawPixel(1, 4);
                this.drawPixel(0, 5);
                this.drawPixel(2, 5);
                this.drawPixel(0, 6);
                this.drawPixel(2, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(2, 8);
                break;
            case 'r':
                this.drawPixel(0, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 4);
                this.drawPixel(3, 4);
                this.drawPixel(4, 5);
                break;
            case 's':
                this.drawPixel(0, 5);
                this.drawPixel(1, 4);
                this.drawPixel(2, 5);
                this.drawPixel(2, 6);
                this.drawPixel(1, 7);
                this.drawPixel(0, 7);
                break;
            case 't':
                this.drawPixel(1, 0);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(1, 3);
                this.drawPixel(1, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(0, 3);
                this.drawPixel(2, 3);
                break;
            case 'u':
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 6);
                this.drawPixel(3, 5);
                this.drawPixel(3, 4);
                this.drawPixel(4, 7);
                break;
            case 'v':
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 6);
                this.drawPixel(2, 5);
                this.drawPixel(2, 4);
                break;
            case 'w':
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 6);
                this.drawPixel(2, 5);
                this.drawPixel(3, 7);
                this.drawPixel(4, 6);
                this.drawPixel(4, 5);
                this.drawPixel(4, 4);
                break;
            case 'x':
                this.drawPixel(0, 7);
                this.drawPixel(1, 6);
                this.drawPixel(2, 7);
                this.drawPixel(2, 5);
                this.drawPixel(2, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 4);
                break;
            case 'y':
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 5);
                this.drawPixel(2, 5);
                this.drawPixel(2, 4);
                this.drawPixel(2, 6);
                this.drawPixel(2, 7);
                this.drawPixel(0, 7);
                this.drawPixel(1, 8);
                break;
            case 'z':
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(0, 7);
                this.drawPixel(0, 6);
                this.drawPixel(1, 5);
                this.drawPixel(2, 5);
                this.drawPixel(3, 4);
                this.drawPixel(3, 3);
                this.drawPixel(2, 3);
                this.drawPixel(1, 3);
                this.drawPixel(0, 3);
                break;
            case '0':
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                break;
            case '1':
                this.drawPixel(0, 1);
                this.drawPixel(1, 0);
                this.drawPixel(1, 1);
                this.drawPixel(1, 2);
                this.drawPixel(1, 3);
                this.drawPixel(1, 4);
                this.drawPixel(1, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                break;
            case '2':
                this.drawPixel(0, 1);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 4);
                this.drawPixel(1, 5);
                this.drawPixel(0, 6);
                this.drawPixel(0, 7);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                this.drawPixel(4, 7);
                break;
            case '3':
                this.drawPixel(0, 1);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(0, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                break;
            case '4':
                this.drawPixel(3, 0);
                this.drawPixel(2, 1);
                this.drawPixel(3, 1);
                this.drawPixel(1, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 5);
                this.drawPixel(2, 5);
                this.drawPixel(3, 5);
                this.drawPixel(4, 5);
                this.drawPixel(3, 2);
                this.drawPixel(3, 3);
                this.drawPixel(3, 4);
                this.drawPixel(3, 5);
                this.drawPixel(3, 6);
                this.drawPixel(3, 7);
                break;
            case '5':
                this.drawPixel(0, 0);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(0, 6);
                break;
            case '6':
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 1);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(0, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(0, 6);
                break;
            case '7':
                this.drawPixel(0, 0);
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(4, 0);
                this.drawPixel(4, 1);
                this.drawPixel(3, 2);
                this.drawPixel(3, 3);
                this.drawPixel(2, 4);
                this.drawPixel(2, 5);
                this.drawPixel(1, 6);
                this.drawPixel(1, 7);
                break;
            case '8':
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(0, 4);
                this.drawPixel(0, 5);
                this.drawPixel(0, 6);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(1, 7);
                this.drawPixel(2, 7);
                this.drawPixel(3, 7);
                break;
            case '9':
                this.drawPixel(1, 0);
                this.drawPixel(2, 0);
                this.drawPixel(3, 0);
                this.drawPixel(0, 1);
                this.drawPixel(0, 2);
                this.drawPixel(4, 1);
                this.drawPixel(4, 2);
                this.drawPixel(1, 3);
                this.drawPixel(2, 3);
                this.drawPixel(3, 3);
                this.drawPixel(4, 3);
                this.drawPixel(4, 4);
                this.drawPixel(4, 5);
                this.drawPixel(4, 6);
                this.drawPixel(3, 7);
                this.drawPixel(2, 7);
                this.drawPixel(1, 7);
                this.drawPixel(0, 6);
                break;
        }
    }

    drawText(text, color = 'white', textWrap = false) {
        this.#ctx.fillStyle = color;
        let textArray = textWrap ? text.split(" ") : [text];
        
        for (let i = 0; i < textArray.length; i++) {
            if (textWrap && this.xPos + this.#countWordWidth(textArray[i]) > this.width - this.padding) {
                this.xPos = this.padding;
                this.yPos += this.pixel * this.lineSpacing;
            }
            
            for (let j = 0; j < textArray[i].length; j++) {
                this.drawChar(textArray[i][j]);
                this.xPos += this.pixel * (this.#alphabetMapping[textArray[i][j]] + 2);
            }
            
            this.xPos += this.pixel * (this.#alphabetMapping[' '] + 2);
        }
    }

    #countWordWidth(word)
    {
        let width = 0;
        for (let i = 0; i < word.length; i++)
        {
            width += this.pixel * (this.#alphabetMapping[word[i]] + 2);
        }
        return width;
    }
}