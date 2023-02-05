
    // const heading = React.createElement("h1",//First is the Name of the Tag
    // {},"NamasteyEveyrone");// Second Attributes of the Tag
    // console.log(heading);
    //Third one is what you put inside the tag
    // const heading2 = React.createElement("h2",{

    // },"Namastey shishir");
    HI 
sdsdedf
    const heading3 = React.createElement("h3",{},"HEADING 3");
    const heading4 = React.createElement("h3",{},"HEADING 4");

    const container = React.createElement("div",{
        id: "container",
    },[heading3,heading4]) //Children of the array, these are react element, Objects


    const root1 = ReactDOM.createRoot(document.getElementById("root"));
    root1.render(container);//Takes in the react element and modifies our DOM
