AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default : '', type: "string"}
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.MouseLeave()
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.handlePlacesListState();
        })
        
    },
    MouseLeave: function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material", {
                        color: "#0077CC",
                        opacity : 1
                    })
                }
            }
        })
    },
    handlePlacesListState: function (){
        const id = this.el.getAttribute("id");
        const placesId = ["batman", "avengers","c_pants","spiderman"]
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            })
            this.el.setAttribute("material", {
                color: "green", 
                opacity: 1
            })  
            
        }
    }
})