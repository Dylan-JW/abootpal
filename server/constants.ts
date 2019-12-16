// *** Room ***
export const ROOM_PLAYERS_MIN = 3;
export const ROOM_PLAYERS_MAX = 12;
export const NICKNAME_MAX_LENGTH = 16;
export const CHATMESSAGE_MAX_LENGTH = 256;

// *** Game ***
export const NUMBER_OF_ROUNDS_DEFAULT = 1;
// Timers (all timers are soft by default)
export const TIMERS_DEFAULT: { [playstate: string] : number; } = {
    Research: 10,//180,
    Describe: 5,//30,
    Judge: 15//300
}