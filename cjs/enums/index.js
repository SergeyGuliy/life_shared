'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const USER_ROLES = {
  ADMIN: 'ADMIN',
  CASUAL: 'CASUAL'
};

const ROOM_TYPES = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

const MESSAGE_TYPES = {
  TEXT: 'TEXT',
  VOICE: 'VOICE'
};

const MESSAGE_RECEIVER_TYPES = {
  GLOBAL: 'GLOBAL',
  ROOM: 'ROOM',
  PRIVATE: 'PRIVATE'
};

const MESSAGES_TYPES_MAP = {
  GLOBAL: "global",
  ROOM: "room",
  PRIVATE: "private"
};

const FRIENDSHIP_STATUSES = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  IGNORED: 'IGNORED'
};

const USER_ONLINE_STATUSES = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

const USER_GAME_STATUSES = {
  NOT_IN_GAME: 'NOT_IN_GAME',
  WAITING_GAME_STARTING: 'WAITING_GAME_STARTING',
  GAME_IN_PROGRESS: 'GAME_IN_PROGRESS'
};

const LOCALES = {
  en: 'en',
  ru: 'ru'
};

const LOCALES_WITH_KEYS = [{ title: "English", key: LOCALES.en }, { title: "Russian", key: LOCALES.ru }];

const SOUNDS = {
  SOUNDS_1: 'SOUNDS_1',
  SOUNDS_2: 'SOUNDS_2',
  SOUNDS_3: 'SOUNDS_3',
  SOUNDS_4: 'SOUNDS_4',
  SOUNDS_5: 'SOUNDS_5'
};

const COUNTRIES = ["England", "Russia", "Ukraine", "Hungary", "Italy"];

exports.USER_ROLES = USER_ROLES;
exports.ROOM_TYPES = ROOM_TYPES;
exports.MESSAGE_TYPES = MESSAGE_TYPES;
exports.MESSAGE_RECEIVER_TYPES = MESSAGE_RECEIVER_TYPES;
exports.MESSAGES_TYPES_MAP = MESSAGES_TYPES_MAP;
exports.FRIENDSHIP_STATUSES = FRIENDSHIP_STATUSES;
exports.USER_ONLINE_STATUSES = USER_ONLINE_STATUSES;
exports.USER_GAME_STATUSES = USER_GAME_STATUSES;
exports.LOCALES = LOCALES;
exports.LOCALES_WITH_KEYS = LOCALES_WITH_KEYS;
exports.SOUNDS = SOUNDS;
exports.COUNTRIES = COUNTRIES;