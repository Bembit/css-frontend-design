let initialTheme = true;

// localStorage.getItem(initialTheme);
// avatar.jpg missing

function toggleTheme() {
    let root = document.documentElement;

    if(initialTheme) {
        root.style.setProperty('--primary', "#eb065a");
        root.style.setProperty('--dark-grey', "#e3e3e3");
        root.style.setProperty('--white', "#fff");
        root.style.setProperty('--black', "#333");
        root.style.setProperty('--light-grey', "#f9f9f9")
        root.style.setProperty('--mid-grey', "#f3f3f3")
        root.style.setProperty('--subtle-grey', "#eee")
        initialTheme = false;

// avoide double click :D

        // initialTheme = root.style;
        // localStorage.setItem('light-theme', initialTheme);
    } else {
        root.style.setProperty('--primary', "#eb065a");
        root.style.setProperty('--dark-grey', "#222");
        root.style.setProperty('--white', "#111");
        root.style.setProperty('--black', "#fff");
        root.style.setProperty('--light-grey', "#222")
        root.style.setProperty('--mid-grey', "#111")
        root.style.setProperty('--subtle-grey', "#111")
        initialTheme = true;
        // localStorage.setItem('dark-theme', initialTheme);
    }
}