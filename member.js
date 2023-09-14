function skillsMember() {
    let skills = document.querySelectorAll(".skills__item");
    let skillsList = document.querySelector(".skills__list");
    let skillsMember = document.querySelectorAll(".skills__member");
    let skillsMemberList = document.querySelectorAll(".skills__member-list");
    let skillsMemberItem = document.querySelectorAll(".skills__member-item");

    if (skillsList) {
        skillsList.addEventListener("click", function (e) {
            let target = e.target;
            if (target.classList.contains("skills__item")) {
                skills.forEach((item, index) => {
                    item.classList.remove("skills__item--active");
                    if (item == target) {
                        item.classList.add("skills__item--active");
                        skillsMember.forEach((item, index) => {
                            item.classList.remove("skills__member--active");
                            if (index == 0) {
                                item.classList.add("skills__member--active");
                            }
                        });
                        skillsMemberList.forEach((item, index) => {
                            item.classList.remove("skills__member-list--active");
                            if (index == 0) {
                                item.classList.add("skills__member-list--active");
                            }
                        });
                        skillsMemberItem.forEach((item, index) => {
                            item.classList.remove("skills__member-item--active");
                            if (index == 0) {
                                item.classList.add("skills__member-item--active");
                            }
                        });
                    }
                });
            }
        });
    }
}