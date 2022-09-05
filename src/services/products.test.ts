import axios from 'axios';
import { getProducts } from './products';

describe('products', () => {

  describe('getProducts', () => {
    const searchTerm = 'a';
    const pageSize = 10;
    const mockData = {
      data: [
        {
          name: 'some name',
          teamName: 'some team name',
          productOwner: 'some PO',
          id: 'some-id',
          description: 'some description',
          area: 'some area',
          tags: ['some tag'],
          dashboardURL: 'some url',
          imageURL: 'some image url',
          platform: 'some platform',
        },
      ],
    };

    const expectedResult = [
      {
        name: 'some name',
        teamName: 'some team name',
        productOwner: 'some PO',
        id: 'some-id',
        description: 'some description',
        area: 'some area',
        tags: ['some tag'],
        dashboardURL: 'some url',
        imageURL: 'some image url',
        platform: 'some platform',
      },
    ];

    test('should return a list of products', async () => {
      axios.get = jest.fn().mockReturnValue(mockData);
      const response = await getProducts(searchTerm, pageSize);
      expect(response).toEqual(expectedResult);
    });
  });
});