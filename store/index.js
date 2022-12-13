export const state = () => ({
  cards: [],
});

export const mutations = {
  setCards(state, cards){
    state.cards = cards
  },
  deleteCard(state, card){
    state.cards.splice(state.cards.indexOf(card), 1)
  }
};
