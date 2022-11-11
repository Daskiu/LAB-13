class Task{
    constructor(task, state, id){
        this.task = task;
        this.state = state;
        this.id = id;
    }

    render(container){
        let task = document.createElement('div');
        task.classList.add('task');

        let html=`
            <p>${this.task}</p>
            <div class="btnDiv">
            <button class="upBtn" id="up${this.id}" onclick="upgradeState(${this.id})">Up</button>
            <button class="downBtn" id="down${this.id}" onclick="downgradeState(${this.id})">Down</button>                <button class="eraseBtn" id="erase${this.id}" onclick="erase(${this.id})">Erase</button>
            </div>`;
            task.innerHTML += html;
            container.appendChild(task);
    }
}