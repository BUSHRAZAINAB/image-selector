const panels= document.querySelectorAll();

panels.forEach((panel)) ==> {
    removeEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
        });
        const removeActiveClass = () =>{
            panels.forEach((panel)) => {
                panel.classList.remove("active");

            });
        };