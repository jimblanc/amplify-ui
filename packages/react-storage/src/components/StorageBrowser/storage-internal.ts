// Re-export internal apis & types of `@aws-amplify/storage/internals` in a single file
// eslint-disable-next-line import/no-extraneous-dependencies
export {
  ListLocations,
  LocationCredentialsProvider,
  Permission,
  UploadDataInput,
  AuthConfigAdapter,
  CreateManagedAuthConfigAdapterInput,
  GetLocationCredentials,
  LocationCredentialsStore,
  StorageSubpathStrategy,
  ListPaginateInput,
  ListOutput,
  ListLocationsOutput,
  list,
  uploadData,
  getUrl,
  createLocationCredentialsStore,
  createManagedAuthConfigAdapter,
  copy,
  remove,
} from '@aws-amplify/storage/internals';
