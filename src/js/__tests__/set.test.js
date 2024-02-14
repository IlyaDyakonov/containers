// import { Team, Character } from '../set';


// test ("добавление игрока", () => {
//     // const one = new Team();
//     // const t = new Character("Silverhend");
//     // one.add(t);

//     // const myTeam = [
//     //     new Character("Silverhend"),
//     // ];
//     // expect([...one.members]).toEqual(myTeam);

//     const teamPlay = new Team();
//     const char = teamPlay.add('Silver');

//     expect(char.members).toBe('Silver');
// });


// test ("добавление с ошибкой", () => {
//     const one = new Team();
//     one.add("Silverhend");

//     expect(() => {
//         one.add("Silverhend");}).toThrow('Игрок Silverhend уже есть в команде!');
// });


// test("проверка и преобразование toArray", () => {
//     const one = new Team();
//     one.addAll("Silverhend", "S", "Si", "Sil");

//     const myTeam = [
//         "Silverhend",
//         "S",
//         "Si",
//         "Sil"
//     ];

//     expect(one.members).toEqual(myTeam);
// });
