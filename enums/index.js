const USER_ROLES = {
  ADMIN:'ADMIN',
  CASUAL: 'CASUAL',
}

const ROOM_TYPES = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
}

const MESSAGE_TYPES = {
  TEXT: 'TEXT',
  VOICE: 'VOICE',
}

const MESSAGE_RECEIVER_TYPES = {
  GLOBAL: 'GLOBAL',
  ROOM: 'ROOM',
  PRIVATE: 'PRIVATE',
}

const FRIENDSHIP_STATUSES = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  IGNORED: 'IGNORED',
}

const USER_ONLINE_STATUSES = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
}

const USER_GAME_STATUSES = {
  NOT_IN_GAME: 'NOT_IN_GAME',
  WAITING_GAME_STARTING: 'WAITING_GAME_STARTING',
  GAME_IN_PROGRESS: 'GAME_IN_PROGRESS',
}

const LOCALES = {
  en: 'en',
  ru: 'ru',
}

const SOUNDS = {
  SOUNDS_1: 'SOUNDS_1',
  SOUNDS_2: 'SOUNDS_2',
  SOUNDS_3: 'SOUNDS_3',
  SOUNDS_4: 'SOUNDS_4',
  SOUNDS_5: 'SOUNDS_5',
}

module.exports = {
  USER_ROLES,
  ROOM_TYPES,
  MESSAGE_TYPES,
  MESSAGE_RECEIVER_TYPES,
  FRIENDSHIP_STATUSES,
  USER_ONLINE_STATUSES,
  USER_GAME_STATUSES,
  LOCALES,
  SOUNDS,
}
