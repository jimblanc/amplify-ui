import * as StorageModule from '../../../storage-internal';

import { copyHandler, CopyHandlerInput } from '../copy';

const copySpy = jest.spyOn(StorageModule, 'copy');

const baseInput: CopyHandlerInput = {
  prefix: 'prefix/',
  config: {
    accountId: '012345678901',
    bucket: 'bucket',
    credentials: jest.fn(),
    region: 'region',
  },
  data: { key: 'key', payload: { destinationPrefix: 'destination/' } },
};

describe('copyHandler', () => {
  it('calls `copy` and returns the expected `key`', () => {
    const { key } = copyHandler(baseInput);

    const bucket = {
      bucketName: `${baseInput.config.bucket}`,
      region: `${baseInput.config.region}`,
    };

    const expected: StorageModule.CopyInput = {
      destination: {
        accountId: baseInput.config.accountId,
        bucket,
        path: 'destination/key',
      },
      source: {
        accountId: `${baseInput.config.accountId}`,
        bucket,
        path: `${baseInput.prefix}${baseInput.data.key}`,
      },
      options: {
        locationCredentialsProvider: baseInput.config.credentials,
      },
    };

    expect(copySpy).toHaveBeenCalledWith(expected);
    expect(key).toBe(baseInput.data.key);
  });
});
