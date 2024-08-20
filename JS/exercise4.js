class Library{
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName,user){
        if(this.bookList.includes(bookName)){
            console.log(`${bookName} present. Can be issued`);

            if(this.issuedBooks[bookName] == undefined){
                this.issuedBooks[bookName] = user;
                console.log(`${bookName} issued to ${user}`);
            }
            else{
                console.log("Book is already issued");
            }
        }
        else{
            console.log(`${bookName} not present. Cannot be issued`);
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}
let book1 = new Library(['Twilight','Dean','New Moon','Breaking Dawn','Bhagavad Gita']);
console.log(book1);
book1.issueBook("C programming","rohan");
book1.issueBook("C++ programming","rohan");
book1.issueBook("Twilight","rahul");
book1.issueBook("Breaking Dawn","sanjay");
book1.issueBook("Bhagavad Gita","Amit");
book1.returnBook('Breaking Dawn');
console.log(book1);







/*class library {
            constructor(book1, book2, book3, book4) {
                this.book1 = book1;
                this.book2 = book2;
                this.book3 = book3;
                this.book4 = book4;
            }

            getBookList() {
                console.log(this.book1, this.book2, this.book3, this.book4);
            }

            issueBook(bookname, user) {
                return `The book of ${this.book2} has been issued to ${user}`;
            }

            returnBook(bookname) {
                return `The book named ${this.book3} has been returned`;
            }
        }

        let library1 = new library('HTML', 'CSS', 'JAVASCRIPT', 'PYTHON');
        console.log(library1);

        library1.getBookList();
        console.log(library1.issueBook(this.book2, 'Prabh'));
        console.log(library1.returnBook(this.book2));
        */