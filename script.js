document.getElementById("followBtn").onclick = function() {
    if(this.textContent === "Follow") {
        this.textContent = "Unfollow";
    } else{
        this.textContent = "Follow"
    
    }
};
