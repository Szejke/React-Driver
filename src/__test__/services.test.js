import { getDevice, createDeviceFromApi } from 'services/devices';
// import axios from 'axios';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
afterEach(() => jest.resetAllMocks());

describe(' Tests API', () => {
  it('Test connect', async () => {
    const data = await getDevice();
    expect(data);
  });

  const badCreate = {
    name: '1231231231223',
    description: 'tes3',
    disabled: 'asdsadsdsad',
  };

  jest.mock('axios');
  it('error create bad Type', async () => {
    await createDeviceFromApi(badCreate)
      .then()
      .catch((e) => {
        expect(e.response.status).toBe(400);
      });
  });

  const badCreate30Characters = {
    name: '123456789101234567891234456678891234454657123123',
    description: 'tes3',
    disabled: false,
  };

  it('error name max 30', async () => {
    await createDeviceFromApi(badCreate30Characters)
      .then()
      .catch((e) => {
        expect(e.response.status).toBe(400);
      });
  });

  // const create = {
  //   name: '1231231231223',
  //   description: 'tes3',
  //   disabled: false,
  // };
  // const url = 'https://deviceproject.herokuapp.com/device/';

  // it('test create', async () => {
  //   await axios
  //     .post(url, create)
  //     .then((response) => {
  //       expect(response.data.name === create.name).toBeTruthy();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // });
});
