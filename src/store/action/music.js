import actionType from "./actionTypes";

export const setCurSongId = (sid) => ({
    type: actionType.SET_CUR_SONG_ID,
    sid
})
export const play = (flag) => ({
    type: actionType.PLAY,
    flag
})