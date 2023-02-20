const avatar1 =
  import.meta.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar1.webp';
const avatar2 =
  import.meta.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar2.webp';

export const kanbanPeople = {
  anna: {
    id: 'Alex',
    name: 'Alex',
    avatar: avatar1,
  },
  pavel: {
    id: 'Pavel',
    name: 'Pavel',
    avatar: avatar2,
  },
};
