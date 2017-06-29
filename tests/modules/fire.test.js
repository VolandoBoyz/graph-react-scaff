import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import reducer, { FIRE_ADD, FIRE_DECREASE, FIRE_FETCH_SUCCESS, incrementFire, decreaseFire, fireFetchSuccess, fetchFire } from '../../src/modules/fire';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// sync actions testing
describe('fire sync actions', () => {
  it('should create an action to increment fire size', () => {
    const expectedAction = {
      type: FIRE_ADD,
      payload: null,
    };
    expect(incrementFire()).toEqual(expectedAction);
  });
  it('should create an action to decrease fire size', () => {
    const expectedAction = {
      type: FIRE_DECREASE,
      payload: null,
    };
    expect(decreaseFire()).toEqual(expectedAction);
  });
  it('should create an action to decrease fire size', () => {
    const expectedAction = {
      type: FIRE_DECREASE,
      payload: null,
    };
    expect(decreaseFire()).toEqual(expectedAction);
  });
  it('should create an action that returns te 🔥 string', () => {
    const expectedAction = {
      type: FIRE_FETCH_SUCCESS,
      payload: '🔥🔥🔥🔥',
    };
    expect(fireFetchSuccess('🔥🔥🔥🔥')).toEqual(expectedAction);
  });
});

// async actions tests
describe('fire async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(' creates FIRE_FETCH_SUCCESS when fetching 🔥 has been done', () => {
    nock('http://localhost:8080/')
      .get('/api/example')
      .reply(200, { fire: '🔥' });
    const expectedAction = [{ type: FIRE_FETCH_SUCCESS, payload: '🔥' }];
    const store = mockStore({ fire: '', fireSize: 0 });
    return store.dispatch(fetchFire())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});

// reducers tests
describe('fire reducer', () => {
  // test initial state
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        fire: '',
        fireSize: 0,
      }
    );
  });
  // test some reducer cases
  it('should increase fire size in 0.8 on FIRE_ADD action', () => {
    expect(
      reducer(
        {
          fire: '',
          fireSize: 0,
        },
        {
          type: FIRE_ADD,
          payload: null,
        }
      )
    ).toEqual(
      {
        fire: '',
        fireSize: 1,
      }
    );
  });

  it('should decrease fire size in 0.8 on FIRE_DECREASE action', () => {
    expect(
      reducer(
        {
          fire: '',
          fireSize: 1,
        },
        {
          type: FIRE_DECREASE,
          payload: null,
        }
      )
    ).toEqual(
      {
        fire: '',
        fireSize: 0,
      }
    );
  });
});
