class Settings {
    constructor() {
        this.defaultSettings = new Map ([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])
    }

    theme(theme) {
        if (!this.defaultSettings.get('theme') !== 'dark' || 'light' || 'gray') {
            return "Такой темы нет!";
        } else {
            this.defaultSettings.set('theme', theme);
            return `Тема сменилась на ${theme}\nТекущие настройки: ${this.defaultSettings}\n`;
        }
    }

    music(music) {
        if (this.defaultSettings.has('music')) {
            this.defaultSettings.set('music', );
            return `Жанр музыки сменился на ${music}\nТекущие настройки: ${this.defaultSettings}\n`;
        }
    }

    difficulty(difficulty) {
        if (this.defaultSettings.has('difficulty')) {
            this.defaultSettings.set('difficulty', difficulty);
            return `Сложность сменилась на ${difficulty}\nТекущие настройки: ${this.defaultSettings}\n`;
        } 
    }

    reset(key) {
        return this.defaultSettings.get(key)
        // const arrayName = Array.from(this.defaultSettings);
        // return arrayName;
    }
}


const m = new Settings();
console.log(m.theme('gray'));
console.log(m.music('rock'));
console.log(m.difficulty('nightmare'));
console.log(m.reset('music'));
