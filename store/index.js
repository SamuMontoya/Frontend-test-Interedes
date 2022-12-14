export const state = () => ({
  cards: [],
});

export const mutations = {
  setCards(state, cards){
    state.cards = cards
  },
  deleteCard(state, card){
    state.cards.splice(state.cards.indexOf(card), 1)
  },
  editTitle(state, i, title){
    let card = state.cards.find(element => element.id == i)
    let index = state.cards.indexOf(card)
    state.cards[index].title = title
  }
};