import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
    	type: ADD_COMMENT,
        text,
        id: uuid.v4()	
    }
}

function removeComment(id) {
    return {
    	type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
    	type: EDIT_COMMENT,
        text,
        id
    }
}

function thumbUpComment(id) {
    return {
    	type: THUMB_UP_COMMENT,
        id	
    }
}

function thumbDownComment(id) {
    return {
    	type: THUMB_DOWN_COMMENT,
        id	
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditCommnet = (text, id) => dispatch(editComment(text, id));
const boundThumbUpCommnet = id => dispatch(thumbUpComment(id));
const boundThumbDownCommnet = id => dispatch(thumbDownComment(id));