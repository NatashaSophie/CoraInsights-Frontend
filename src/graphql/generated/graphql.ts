import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { fetcher } from '@/graphql/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  Time: any;
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Certificate = {
  __typename?: 'Certificate';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  file?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  trail?: Maybe<Trails>;
  updated_at: Scalars['DateTime'];
};

export type CertificateAggregator = {
  __typename?: 'CertificateAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CertificateConnection = {
  __typename?: 'CertificateConnection';
  aggregate?: Maybe<CertificateAggregator>;
  groupBy?: Maybe<CertificateGroupBy>;
  values?: Maybe<Array<Maybe<Certificate>>>;
};

export type CertificateConnectionCode = {
  __typename?: 'CertificateConnectionCode';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CertificateConnectionCreated_At = {
  __typename?: 'CertificateConnectionCreated_at';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CertificateConnectionFile = {
  __typename?: 'CertificateConnectionFile';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CertificateConnectionId = {
  __typename?: 'CertificateConnectionId';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CertificateConnectionTrail = {
  __typename?: 'CertificateConnectionTrail';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CertificateConnectionUpdated_At = {
  __typename?: 'CertificateConnectionUpdated_at';
  connection?: Maybe<CertificateConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CertificateGroupBy = {
  __typename?: 'CertificateGroupBy';
  code?: Maybe<Array<Maybe<CertificateConnectionCode>>>;
  created_at?: Maybe<Array<Maybe<CertificateConnectionCreated_At>>>;
  file?: Maybe<Array<Maybe<CertificateConnectionFile>>>;
  id?: Maybe<Array<Maybe<CertificateConnectionId>>>;
  trail?: Maybe<Array<Maybe<CertificateConnectionTrail>>>;
  updated_at?: Maybe<Array<Maybe<CertificateConnectionUpdated_At>>>;
};

export type CertificateInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  file?: InputMaybe<Scalars['String']>;
  trail?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type CheckpointInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  estabelecimentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  location: ComponentGeneralLocationInput;
  name: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Checkpoints = {
  __typename?: 'Checkpoints';
  created_at: Scalars['DateTime'];
  estabelecimentos?: Maybe<Array<Maybe<Establishment>>>;
  id: Scalars['ID'];
  location?: Maybe<ComponentGeneralLocation>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CheckpointsEstabelecimentosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CheckpointsAggregator = {
  __typename?: 'CheckpointsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CheckpointsConnection = {
  __typename?: 'CheckpointsConnection';
  aggregate?: Maybe<CheckpointsAggregator>;
  groupBy?: Maybe<CheckpointsGroupBy>;
  values?: Maybe<Array<Maybe<Checkpoints>>>;
};

export type CheckpointsConnectionCreated_At = {
  __typename?: 'CheckpointsConnectionCreated_at';
  connection?: Maybe<CheckpointsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CheckpointsConnectionId = {
  __typename?: 'CheckpointsConnectionId';
  connection?: Maybe<CheckpointsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CheckpointsConnectionLocation = {
  __typename?: 'CheckpointsConnectionLocation';
  connection?: Maybe<CheckpointsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CheckpointsConnectionName = {
  __typename?: 'CheckpointsConnectionName';
  connection?: Maybe<CheckpointsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CheckpointsConnectionUpdated_At = {
  __typename?: 'CheckpointsConnectionUpdated_at';
  connection?: Maybe<CheckpointsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CheckpointsGroupBy = {
  __typename?: 'CheckpointsGroupBy';
  created_at?: Maybe<Array<Maybe<CheckpointsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CheckpointsConnectionId>>>;
  location?: Maybe<Array<Maybe<CheckpointsConnectionLocation>>>;
  name?: Maybe<Array<Maybe<CheckpointsConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<CheckpointsConnectionUpdated_At>>>;
};

export type ComponentGeneralAvaliation = {
  __typename?: 'ComponentGeneralAvaliation';
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rate: Scalars['Float'];
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentGeneralAvaliationInput = {
  comment?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type ComponentGeneralLocation = {
  __typename?: 'ComponentGeneralLocation';
  id: Scalars['ID'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type ComponentGeneralLocationInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type ComponentGeneralPlace = {
  __typename?: 'ComponentGeneralPlace';
  id: Scalars['ID'];
  location?: Maybe<ComponentGeneralLocation>;
  name: Scalars['String'];
};

export type ComponentGeneralPlaceInput = {
  location: ComponentGeneralLocationInput;
  name: Scalars['String'];
};

export enum Enum_Trailparts_Difficulty {
  Easy = 'easy',
  Extreme = 'extreme',
  Hard = 'hard',
  Medium = 'medium'
}

export enum Enum_Trails_Modality {
  Bike = 'bike',
  Foot = 'foot'
}

export enum Enum_Userspermissionsuser_Organizationtype {
  Government = 'government',
  None = 'none',
  TrailManagement = 'trail_management'
}

export enum Enum_Userspermissionsuser_Sex {
  Female = 'Female',
  Male = 'Male'
}

export enum Enum_Userspermissionsuser_Usertype {
  Manager = 'manager',
  Merchant = 'merchant',
  Pilgrim = 'pilgrim'
}

export type Establishment = {
  __typename?: 'Establishment';
  address?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  location?: Maybe<ComponentGeneralLocation>;
  name: Scalars['String'];
  openingHours?: Maybe<Scalars['String']>;
  owner?: Maybe<UsersPermissionsUser>;
  phone?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  updated_at: Scalars['DateTime'];
};


export type EstablishmentImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type EstablishmentAggregator = {
  __typename?: 'EstablishmentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EstablishmentConnection = {
  __typename?: 'EstablishmentConnection';
  aggregate?: Maybe<EstablishmentAggregator>;
  groupBy?: Maybe<EstablishmentGroupBy>;
  values?: Maybe<Array<Maybe<Establishment>>>;
};

export type EstablishmentConnectionAddress = {
  __typename?: 'EstablishmentConnectionAddress';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionCategory = {
  __typename?: 'EstablishmentConnectionCategory';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionCreated_At = {
  __typename?: 'EstablishmentConnectionCreated_at';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EstablishmentConnectionDescription = {
  __typename?: 'EstablishmentConnectionDescription';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionEmail = {
  __typename?: 'EstablishmentConnectionEmail';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionId = {
  __typename?: 'EstablishmentConnectionId';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EstablishmentConnectionIsActive = {
  __typename?: 'EstablishmentConnectionIsActive';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type EstablishmentConnectionLocation = {
  __typename?: 'EstablishmentConnectionLocation';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EstablishmentConnectionName = {
  __typename?: 'EstablishmentConnectionName';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionOpeningHours = {
  __typename?: 'EstablishmentConnectionOpeningHours';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionOwner = {
  __typename?: 'EstablishmentConnectionOwner';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EstablishmentConnectionPhone = {
  __typename?: 'EstablishmentConnectionPhone';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EstablishmentConnectionServices = {
  __typename?: 'EstablishmentConnectionServices';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type EstablishmentConnectionUpdated_At = {
  __typename?: 'EstablishmentConnectionUpdated_at';
  connection?: Maybe<EstablishmentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EstablishmentGroupBy = {
  __typename?: 'EstablishmentGroupBy';
  address?: Maybe<Array<Maybe<EstablishmentConnectionAddress>>>;
  category?: Maybe<Array<Maybe<EstablishmentConnectionCategory>>>;
  created_at?: Maybe<Array<Maybe<EstablishmentConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<EstablishmentConnectionDescription>>>;
  email?: Maybe<Array<Maybe<EstablishmentConnectionEmail>>>;
  id?: Maybe<Array<Maybe<EstablishmentConnectionId>>>;
  isActive?: Maybe<Array<Maybe<EstablishmentConnectionIsActive>>>;
  location?: Maybe<Array<Maybe<EstablishmentConnectionLocation>>>;
  name?: Maybe<Array<Maybe<EstablishmentConnectionName>>>;
  openingHours?: Maybe<Array<Maybe<EstablishmentConnectionOpeningHours>>>;
  owner?: Maybe<Array<Maybe<EstablishmentConnectionOwner>>>;
  phone?: Maybe<Array<Maybe<EstablishmentConnectionPhone>>>;
  services?: Maybe<Array<Maybe<EstablishmentConnectionServices>>>;
  updated_at?: Maybe<Array<Maybe<EstablishmentConnectionUpdated_At>>>;
};

export type EstablishmentInput = {
  address?: InputMaybe<Scalars['String']>;
  category: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  location: ComponentGeneralLocationInput;
  name: Scalars['String'];
  openingHours?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Scalars['JSON']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = Certificate | CertificateAggregator | CertificateConnection | CertificateConnectionCode | CertificateConnectionCreated_At | CertificateConnectionFile | CertificateConnectionId | CertificateConnectionTrail | CertificateConnectionUpdated_At | CertificateGroupBy | Checkpoints | CheckpointsAggregator | CheckpointsConnection | CheckpointsConnectionCreated_At | CheckpointsConnectionId | CheckpointsConnectionLocation | CheckpointsConnectionName | CheckpointsConnectionUpdated_At | CheckpointsGroupBy | ComponentGeneralAvaliation | ComponentGeneralLocation | ComponentGeneralPlace | Establishment | EstablishmentAggregator | EstablishmentConnection | EstablishmentConnectionAddress | EstablishmentConnectionCategory | EstablishmentConnectionCreated_At | EstablishmentConnectionDescription | EstablishmentConnectionEmail | EstablishmentConnectionId | EstablishmentConnectionIsActive | EstablishmentConnectionLocation | EstablishmentConnectionName | EstablishmentConnectionOpeningHours | EstablishmentConnectionOwner | EstablishmentConnectionPhone | EstablishmentConnectionServices | EstablishmentConnectionUpdated_At | EstablishmentGroupBy | I18NLocale | TrailParts | TrailPartsAggregator | TrailPartsAggregatorAvg | TrailPartsAggregatorMax | TrailPartsAggregatorMin | TrailPartsAggregatorSum | TrailPartsConnection | TrailPartsConnectionCoverImage | TrailPartsConnectionCreated_At | TrailPartsConnectionDescription | TrailPartsConnectionDifficulty | TrailPartsConnectionDistance | TrailPartsConnectionFromCheckpoint | TrailPartsConnectionId | TrailPartsConnectionName | TrailPartsConnectionSlug | TrailPartsConnectionTime | TrailPartsConnectionToCheckpoint | TrailPartsConnectionUpdated_At | TrailPartsGroupBy | TrailRoute | TrailRouteAggregator | TrailRouteConnection | TrailRouteConnectionCreated_At | TrailRouteConnectionFinishedAt | TrailRouteConnectionId | TrailRouteConnectionPublished_At | TrailRouteConnectionRoute | TrailRouteConnectionTrackedPath | TrailRouteConnectionTrail | TrailRouteConnectionUpdated_At | TrailRouteGroupBy | Trails | TrailsAggregator | TrailsConnection | TrailsConnectionCertificate | TrailsConnectionCreated_At | TrailsConnectionFinishedAt | TrailsConnectionId | TrailsConnectionInversePaths | TrailsConnectionModality | TrailsConnectionStartedAt | TrailsConnectionUpdated_At | TrailsConnectionUser | TrailsGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionAvatar | UsersPermissionsUserConnectionBirthdate | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionBusinessAddress | UsersPermissionsUserConnectionBusinessName | UsersPermissionsUserConnectionBusinessPhone | UsersPermissionsUserConnectionBusinessType | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionMerchantApproved | UsersPermissionsUserConnectionMerchantApprovedAt | UsersPermissionsUserConnectionMerchantApprovedBy | UsersPermissionsUserConnectionMerchantRejectedReason | UsersPermissionsUserConnectionName | UsersPermissionsUserConnectionNickname | UsersPermissionsUserConnectionOrganizationName | UsersPermissionsUserConnectionOrganizationType | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionSex | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUserType | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateCertificatePayload | CreateCheckpointPayload | CreateEstablishmentPayload | CreateRolePayload | CreateTrailPartPayload | CreateTrailPayload | CreateTrailRoutePayload | CreateUserPayload | DeleteCertificatePayload | DeleteCheckpointPayload | DeleteEstablishmentPayload | DeleteFilePayload | DeleteRolePayload | DeleteTrailPartPayload | DeleteTrailPayload | DeleteTrailRoutePayload | DeleteUserPayload | UpdateCertificatePayload | UpdateCheckpointPayload | UpdateEstablishmentPayload | UpdateRolePayload | UpdateTrailPartPayload | UpdateTrailPayload | UpdateTrailRoutePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCertificate?: Maybe<CreateCertificatePayload>;
  createCheckpoint?: Maybe<CreateCheckpointPayload>;
  createEstablishment?: Maybe<CreateEstablishmentPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTrail?: Maybe<CreateTrailPayload>;
  createTrailPart?: Maybe<CreateTrailPartPayload>;
  createTrailRoute?: Maybe<CreateTrailRoutePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteCertificate?: Maybe<DeleteCertificatePayload>;
  deleteCheckpoint?: Maybe<DeleteCheckpointPayload>;
  deleteEstablishment?: Maybe<DeleteEstablishmentPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTrail?: Maybe<DeleteTrailPayload>;
  deleteTrailPart?: Maybe<DeleteTrailPartPayload>;
  deleteTrailRoute?: Maybe<DeleteTrailRoutePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCertificate?: Maybe<UpdateCertificatePayload>;
  updateCheckpoint?: Maybe<UpdateCheckpointPayload>;
  updateEstablishment?: Maybe<UpdateEstablishmentPayload>;
  updateFileInfo: UploadFile;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTrail?: Maybe<UpdateTrailPayload>;
  updateTrailPart?: Maybe<UpdateTrailPartPayload>;
  updateTrailRoute?: Maybe<UpdateTrailRoutePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateCertificateArgs = {
  input?: InputMaybe<CreateCertificateInput>;
};


export type MutationCreateCheckpointArgs = {
  input?: InputMaybe<CreateCheckpointInput>;
};


export type MutationCreateEstablishmentArgs = {
  input?: InputMaybe<CreateEstablishmentInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateTrailArgs = {
  input?: InputMaybe<CreateTrailInput>;
};


export type MutationCreateTrailPartArgs = {
  input?: InputMaybe<CreateTrailPartInput>;
};


export type MutationCreateTrailRouteArgs = {
  input?: InputMaybe<CreateTrailRouteInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteCertificateArgs = {
  input?: InputMaybe<DeleteCertificateInput>;
};


export type MutationDeleteCheckpointArgs = {
  input?: InputMaybe<DeleteCheckpointInput>;
};


export type MutationDeleteEstablishmentArgs = {
  input?: InputMaybe<DeleteEstablishmentInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteTrailArgs = {
  input?: InputMaybe<DeleteTrailInput>;
};


export type MutationDeleteTrailPartArgs = {
  input?: InputMaybe<DeleteTrailPartInput>;
};


export type MutationDeleteTrailRouteArgs = {
  input?: InputMaybe<DeleteTrailRouteInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCertificateArgs = {
  input?: InputMaybe<UpdateCertificateInput>;
};


export type MutationUpdateCheckpointArgs = {
  input?: InputMaybe<UpdateCheckpointInput>;
};


export type MutationUpdateEstablishmentArgs = {
  input?: InputMaybe<UpdateEstablishmentInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateTrailArgs = {
  input?: InputMaybe<UpdateTrailInput>;
};


export type MutationUpdateTrailPartArgs = {
  input?: InputMaybe<UpdateTrailPartInput>;
};


export type MutationUpdateTrailRouteArgs = {
  input?: InputMaybe<UpdateTrailRouteInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  certificate?: Maybe<Certificate>;
  certificates?: Maybe<Array<Maybe<Certificate>>>;
  certificatesConnection?: Maybe<CertificateConnection>;
  checkpoint?: Maybe<Checkpoints>;
  checkpoints?: Maybe<Array<Maybe<Checkpoints>>>;
  checkpointsConnection?: Maybe<CheckpointsConnection>;
  establishment?: Maybe<Establishment>;
  establishments?: Maybe<Array<Maybe<Establishment>>>;
  establishmentsConnection?: Maybe<EstablishmentConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  trail?: Maybe<Trails>;
  trailPart?: Maybe<TrailParts>;
  trailParts?: Maybe<Array<Maybe<TrailParts>>>;
  trailPartsConnection?: Maybe<TrailPartsConnection>;
  trailRoute?: Maybe<TrailRoute>;
  trailRoutes?: Maybe<Array<Maybe<TrailRoute>>>;
  trailRoutesConnection?: Maybe<TrailRouteConnection>;
  trails?: Maybe<Array<Maybe<Trails>>>;
  trailsConnection?: Maybe<TrailsConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryCertificateArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCertificatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCertificatesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCheckpointArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCheckpointsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEstablishmentArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEstablishmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEstablishmentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTrailPartArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTrailPartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailPartsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailRouteArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTrailRoutesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailRoutesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryTrailsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TrailInput = {
  certificate?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  finishedAt?: InputMaybe<Scalars['DateTime']>;
  inversePaths?: InputMaybe<Scalars['Boolean']>;
  modality: Enum_Trails_Modality;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startedAt: Scalars['DateTime'];
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type TrailPartInput = {
  coverImage?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  difficulty?: InputMaybe<Enum_Trailparts_Difficulty>;
  distance: Scalars['Float'];
  fromCheckpoint?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  time: Scalars['Time'];
  toCheckpoint?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type TrailParts = {
  __typename?: 'TrailParts';
  coverImage?: Maybe<UploadFile>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  difficulty: Enum_Trailparts_Difficulty;
  distance: Scalars['Float'];
  fromCheckpoint?: Maybe<Checkpoints>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<UploadFile>>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  time: Scalars['Time'];
  toCheckpoint?: Maybe<Checkpoints>;
  updated_at: Scalars['DateTime'];
};


export type TrailPartsImagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TrailPartsAggregator = {
  __typename?: 'TrailPartsAggregator';
  avg?: Maybe<TrailPartsAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<TrailPartsAggregatorMax>;
  min?: Maybe<TrailPartsAggregatorMin>;
  sum?: Maybe<TrailPartsAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrailPartsAggregatorAvg = {
  __typename?: 'TrailPartsAggregatorAvg';
  distance?: Maybe<Scalars['Float']>;
};

export type TrailPartsAggregatorMax = {
  __typename?: 'TrailPartsAggregatorMax';
  distance?: Maybe<Scalars['Float']>;
};

export type TrailPartsAggregatorMin = {
  __typename?: 'TrailPartsAggregatorMin';
  distance?: Maybe<Scalars['Float']>;
};

export type TrailPartsAggregatorSum = {
  __typename?: 'TrailPartsAggregatorSum';
  distance?: Maybe<Scalars['Float']>;
};

export type TrailPartsConnection = {
  __typename?: 'TrailPartsConnection';
  aggregate?: Maybe<TrailPartsAggregator>;
  groupBy?: Maybe<TrailPartsGroupBy>;
  values?: Maybe<Array<Maybe<TrailParts>>>;
};

export type TrailPartsConnectionCoverImage = {
  __typename?: 'TrailPartsConnectionCoverImage';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailPartsConnectionCreated_At = {
  __typename?: 'TrailPartsConnectionCreated_at';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailPartsConnectionDescription = {
  __typename?: 'TrailPartsConnectionDescription';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TrailPartsConnectionDifficulty = {
  __typename?: 'TrailPartsConnectionDifficulty';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TrailPartsConnectionDistance = {
  __typename?: 'TrailPartsConnectionDistance';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type TrailPartsConnectionFromCheckpoint = {
  __typename?: 'TrailPartsConnectionFromCheckpoint';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailPartsConnectionId = {
  __typename?: 'TrailPartsConnectionId';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailPartsConnectionName = {
  __typename?: 'TrailPartsConnectionName';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TrailPartsConnectionSlug = {
  __typename?: 'TrailPartsConnectionSlug';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TrailPartsConnectionTime = {
  __typename?: 'TrailPartsConnectionTime';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailPartsConnectionToCheckpoint = {
  __typename?: 'TrailPartsConnectionToCheckpoint';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailPartsConnectionUpdated_At = {
  __typename?: 'TrailPartsConnectionUpdated_at';
  connection?: Maybe<TrailPartsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailPartsGroupBy = {
  __typename?: 'TrailPartsGroupBy';
  coverImage?: Maybe<Array<Maybe<TrailPartsConnectionCoverImage>>>;
  created_at?: Maybe<Array<Maybe<TrailPartsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<TrailPartsConnectionDescription>>>;
  difficulty?: Maybe<Array<Maybe<TrailPartsConnectionDifficulty>>>;
  distance?: Maybe<Array<Maybe<TrailPartsConnectionDistance>>>;
  fromCheckpoint?: Maybe<Array<Maybe<TrailPartsConnectionFromCheckpoint>>>;
  id?: Maybe<Array<Maybe<TrailPartsConnectionId>>>;
  name?: Maybe<Array<Maybe<TrailPartsConnectionName>>>;
  slug?: Maybe<Array<Maybe<TrailPartsConnectionSlug>>>;
  time?: Maybe<Array<Maybe<TrailPartsConnectionTime>>>;
  toCheckpoint?: Maybe<Array<Maybe<TrailPartsConnectionToCheckpoint>>>;
  updated_at?: Maybe<Array<Maybe<TrailPartsConnectionUpdated_At>>>;
};

export type TrailRoute = {
  __typename?: 'TrailRoute';
  created_at: Scalars['DateTime'];
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  route?: Maybe<TrailParts>;
  trackedPath?: Maybe<Scalars['JSON']>;
  trail?: Maybe<Trails>;
  updated_at: Scalars['DateTime'];
};

export type TrailRouteAggregator = {
  __typename?: 'TrailRouteAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrailRouteConnection = {
  __typename?: 'TrailRouteConnection';
  aggregate?: Maybe<TrailRouteAggregator>;
  groupBy?: Maybe<TrailRouteGroupBy>;
  values?: Maybe<Array<Maybe<TrailRoute>>>;
};

export type TrailRouteConnectionCreated_At = {
  __typename?: 'TrailRouteConnectionCreated_at';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailRouteConnectionFinishedAt = {
  __typename?: 'TrailRouteConnectionFinishedAt';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailRouteConnectionId = {
  __typename?: 'TrailRouteConnectionId';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailRouteConnectionPublished_At = {
  __typename?: 'TrailRouteConnectionPublished_at';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailRouteConnectionRoute = {
  __typename?: 'TrailRouteConnectionRoute';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailRouteConnectionTrackedPath = {
  __typename?: 'TrailRouteConnectionTrackedPath';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type TrailRouteConnectionTrail = {
  __typename?: 'TrailRouteConnectionTrail';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailRouteConnectionUpdated_At = {
  __typename?: 'TrailRouteConnectionUpdated_at';
  connection?: Maybe<TrailRouteConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailRouteGroupBy = {
  __typename?: 'TrailRouteGroupBy';
  created_at?: Maybe<Array<Maybe<TrailRouteConnectionCreated_At>>>;
  finishedAt?: Maybe<Array<Maybe<TrailRouteConnectionFinishedAt>>>;
  id?: Maybe<Array<Maybe<TrailRouteConnectionId>>>;
  published_at?: Maybe<Array<Maybe<TrailRouteConnectionPublished_At>>>;
  route?: Maybe<Array<Maybe<TrailRouteConnectionRoute>>>;
  trackedPath?: Maybe<Array<Maybe<TrailRouteConnectionTrackedPath>>>;
  trail?: Maybe<Array<Maybe<TrailRouteConnectionTrail>>>;
  updated_at?: Maybe<Array<Maybe<TrailRouteConnectionUpdated_At>>>;
};

export type TrailRouteInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  finishedAt?: InputMaybe<Scalars['DateTime']>;
  mapUrl?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  route?: InputMaybe<Scalars['ID']>;
  trackedPath?: InputMaybe<Scalars['JSON']>;
  trail?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Trails = {
  __typename?: 'Trails';
  certificate?: Maybe<Certificate>;
  created_at: Scalars['DateTime'];
  finishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  inversePaths: Scalars['Boolean'];
  modality: Enum_Trails_Modality;
  routes?: Maybe<Array<Maybe<TrailRoute>>>;
  startedAt: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};


export type TrailsRoutesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type TrailsAggregator = {
  __typename?: 'TrailsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrailsConnection = {
  __typename?: 'TrailsConnection';
  aggregate?: Maybe<TrailsAggregator>;
  groupBy?: Maybe<TrailsGroupBy>;
  values?: Maybe<Array<Maybe<Trails>>>;
};

export type TrailsConnectionCertificate = {
  __typename?: 'TrailsConnectionCertificate';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailsConnectionCreated_At = {
  __typename?: 'TrailsConnectionCreated_at';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailsConnectionFinishedAt = {
  __typename?: 'TrailsConnectionFinishedAt';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailsConnectionId = {
  __typename?: 'TrailsConnectionId';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailsConnectionInversePaths = {
  __typename?: 'TrailsConnectionInversePaths';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type TrailsConnectionModality = {
  __typename?: 'TrailsConnectionModality';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TrailsConnectionStartedAt = {
  __typename?: 'TrailsConnectionStartedAt';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailsConnectionUpdated_At = {
  __typename?: 'TrailsConnectionUpdated_at';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TrailsConnectionUser = {
  __typename?: 'TrailsConnectionUser';
  connection?: Maybe<TrailsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TrailsGroupBy = {
  __typename?: 'TrailsGroupBy';
  certificate?: Maybe<Array<Maybe<TrailsConnectionCertificate>>>;
  created_at?: Maybe<Array<Maybe<TrailsConnectionCreated_At>>>;
  finishedAt?: Maybe<Array<Maybe<TrailsConnectionFinishedAt>>>;
  id?: Maybe<Array<Maybe<TrailsConnectionId>>>;
  inversePaths?: Maybe<Array<Maybe<TrailsConnectionInversePaths>>>;
  modality?: Maybe<Array<Maybe<TrailsConnectionModality>>>;
  startedAt?: Maybe<Array<Maybe<TrailsConnectionStartedAt>>>;
  updated_at?: Maybe<Array<Maybe<TrailsConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<TrailsConnectionUser>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  birthdate: Scalars['Date'];
  blocked?: InputMaybe<Scalars['Boolean']>;
  businessAddress?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessPhone?: InputMaybe<Scalars['String']>;
  businessType?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  establishments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  merchantApproved?: InputMaybe<Scalars['Boolean']>;
  merchantApprovedAt?: InputMaybe<Scalars['DateTime']>;
  merchantApprovedBy?: InputMaybe<Scalars['ID']>;
  merchantRejectedReason?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  organizationName?: InputMaybe<Scalars['String']>;
  organizationType?: InputMaybe<Enum_Userspermissionsuser_Organizationtype>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Enum_Userspermissionsuser_Sex>;
  trails?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userType?: InputMaybe<Enum_Userspermissionsuser_Usertype>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar?: Maybe<UploadFile>;
  birthdate: Scalars['Date'];
  blocked?: Maybe<Scalars['Boolean']>;
  businessAddress?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  businessPhone?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  establishments?: Maybe<Array<Maybe<Establishment>>>;
  id: Scalars['ID'];
  merchantApproved?: Maybe<Scalars['Boolean']>;
  merchantApprovedAt?: Maybe<Scalars['DateTime']>;
  merchantApprovedBy?: Maybe<UsersPermissionsUser>;
  merchantRejectedReason?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  organizationName?: Maybe<Scalars['String']>;
  organizationType?: Maybe<Enum_Userspermissionsuser_Organizationtype>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  sex?: Maybe<Enum_Userspermissionsuser_Sex>;
  trails?: Maybe<Array<Maybe<Trails>>>;
  updated_at: Scalars['DateTime'];
  userType: Enum_Userspermissionsuser_Usertype;
  username: Scalars['String'];
};


export type UsersPermissionsUserEstablishmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsUserTrailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionBirthdate = {
  __typename?: 'UsersPermissionsUserConnectionBirthdate';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionBusinessAddress = {
  __typename?: 'UsersPermissionsUserConnectionBusinessAddress';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionBusinessName = {
  __typename?: 'UsersPermissionsUserConnectionBusinessName';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionBusinessPhone = {
  __typename?: 'UsersPermissionsUserConnectionBusinessPhone';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionBusinessType = {
  __typename?: 'UsersPermissionsUserConnectionBusinessType';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionMerchantApproved = {
  __typename?: 'UsersPermissionsUserConnectionMerchantApproved';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionMerchantApprovedAt = {
  __typename?: 'UsersPermissionsUserConnectionMerchantApprovedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionMerchantApprovedBy = {
  __typename?: 'UsersPermissionsUserConnectionMerchantApprovedBy';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionMerchantRejectedReason = {
  __typename?: 'UsersPermissionsUserConnectionMerchantRejectedReason';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionName = {
  __typename?: 'UsersPermissionsUserConnectionName';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionNickname = {
  __typename?: 'UsersPermissionsUserConnectionNickname';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionOrganizationName = {
  __typename?: 'UsersPermissionsUserConnectionOrganizationName';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionOrganizationType = {
  __typename?: 'UsersPermissionsUserConnectionOrganizationType';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionSex = {
  __typename?: 'UsersPermissionsUserConnectionSex';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUserType = {
  __typename?: 'UsersPermissionsUserConnectionUserType';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>;
  birthdate?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBirthdate>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  businessAddress?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBusinessAddress>>>;
  businessName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBusinessName>>>;
  businessPhone?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBusinessPhone>>>;
  businessType?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBusinessType>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  merchantApproved?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMerchantApproved>>>;
  merchantApprovedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMerchantApprovedAt>>>;
  merchantApprovedBy?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMerchantApprovedBy>>>;
  merchantRejectedReason?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMerchantRejectedReason>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsUserConnectionName>>>;
  nickname?: Maybe<Array<Maybe<UsersPermissionsUserConnectionNickname>>>;
  organizationName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionOrganizationName>>>;
  organizationType?: Maybe<Array<Maybe<UsersPermissionsUserConnectionOrganizationType>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  sex?: Maybe<Array<Maybe<UsersPermissionsUserConnectionSex>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  userType?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUserType>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateCertificateInput = {
  data?: InputMaybe<CertificateInput>;
};

export type CreateCertificatePayload = {
  __typename?: 'createCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type CreateCheckpointInput = {
  data?: InputMaybe<CheckpointInput>;
};

export type CreateCheckpointPayload = {
  __typename?: 'createCheckpointPayload';
  checkpoint?: Maybe<Checkpoints>;
};

export type CreateEstablishmentInput = {
  data?: InputMaybe<EstablishmentInput>;
};

export type CreateEstablishmentPayload = {
  __typename?: 'createEstablishmentPayload';
  establishment?: Maybe<Establishment>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTrailInput = {
  data?: InputMaybe<TrailInput>;
};

export type CreateTrailPartInput = {
  data?: InputMaybe<TrailPartInput>;
};

export type CreateTrailPartPayload = {
  __typename?: 'createTrailPartPayload';
  trailPart?: Maybe<TrailParts>;
};

export type CreateTrailPayload = {
  __typename?: 'createTrailPayload';
  trail?: Maybe<Trails>;
};

export type CreateTrailRouteInput = {
  data?: InputMaybe<TrailRouteInput>;
};

export type CreateTrailRoutePayload = {
  __typename?: 'createTrailRoutePayload';
  trailRoute?: Maybe<TrailRoute>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCertificateInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCertificatePayload = {
  __typename?: 'deleteCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type DeleteCheckpointInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCheckpointPayload = {
  __typename?: 'deleteCheckpointPayload';
  checkpoint?: Maybe<Checkpoints>;
};

export type DeleteEstablishmentInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEstablishmentPayload = {
  __typename?: 'deleteEstablishmentPayload';
  establishment?: Maybe<Establishment>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTrailInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTrailPartInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTrailPartPayload = {
  __typename?: 'deleteTrailPartPayload';
  trailPart?: Maybe<TrailParts>;
};

export type DeleteTrailPayload = {
  __typename?: 'deleteTrailPayload';
  trail?: Maybe<Trails>;
};

export type DeleteTrailRouteInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteTrailRoutePayload = {
  __typename?: 'deleteTrailRoutePayload';
  trailRoute?: Maybe<TrailRoute>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCertificateInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  file?: InputMaybe<Scalars['String']>;
  trail?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCheckpointInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  estabelecimentos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  location?: InputMaybe<EditComponentGeneralLocationInput>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentGeneralAvaliationInput = {
  comment?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  rate?: InputMaybe<Scalars['Float']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditComponentGeneralLocationInput = {
  id?: InputMaybe<Scalars['ID']>;
  x?: InputMaybe<Scalars['Float']>;
  y?: InputMaybe<Scalars['Float']>;
};

export type EditComponentGeneralPlaceInput = {
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<EditComponentGeneralLocationInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type EditEstablishmentInput = {
  address?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<EditComponentGeneralLocationInput>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Scalars['JSON']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditTrailInput = {
  certificate?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  finishedAt?: InputMaybe<Scalars['DateTime']>;
  inversePaths?: InputMaybe<Scalars['Boolean']>;
  modality?: InputMaybe<Enum_Trails_Modality>;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditTrailPartInput = {
  coverImage?: InputMaybe<Scalars['ID']>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  difficulty?: InputMaybe<Enum_Trailparts_Difficulty>;
  distance?: InputMaybe<Scalars['Float']>;
  fromCheckpoint?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['Time']>;
  toCheckpoint?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditTrailRouteInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  finishedAt?: InputMaybe<Scalars['DateTime']>;
  mapUrl?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  route?: InputMaybe<Scalars['ID']>;
  trackedPath?: InputMaybe<Scalars['JSON']>;
  trail?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditUserInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  businessAddress?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  businessPhone?: InputMaybe<Scalars['String']>;
  businessType?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  establishments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  merchantApproved?: InputMaybe<Scalars['Boolean']>;
  merchantApprovedAt?: InputMaybe<Scalars['DateTime']>;
  merchantApprovedBy?: InputMaybe<Scalars['ID']>;
  merchantRejectedReason?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  organizationName?: InputMaybe<Scalars['String']>;
  organizationType?: InputMaybe<Enum_Userspermissionsuser_Organizationtype>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  sex?: InputMaybe<Enum_Userspermissionsuser_Sex>;
  trails?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
  userType?: InputMaybe<Enum_Userspermissionsuser_Usertype>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateCertificateInput = {
  data?: InputMaybe<EditCertificateInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCertificatePayload = {
  __typename?: 'updateCertificatePayload';
  certificate?: Maybe<Certificate>;
};

export type UpdateCheckpointInput = {
  data?: InputMaybe<EditCheckpointInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCheckpointPayload = {
  __typename?: 'updateCheckpointPayload';
  checkpoint?: Maybe<Checkpoints>;
};

export type UpdateEstablishmentInput = {
  data?: InputMaybe<EditEstablishmentInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEstablishmentPayload = {
  __typename?: 'updateEstablishmentPayload';
  establishment?: Maybe<Establishment>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTrailInput = {
  data?: InputMaybe<EditTrailInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTrailPartInput = {
  data?: InputMaybe<EditTrailPartInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTrailPartPayload = {
  __typename?: 'updateTrailPartPayload';
  trailPart?: Maybe<TrailParts>;
};

export type UpdateTrailPayload = {
  __typename?: 'updateTrailPayload';
  trail?: Maybe<Trails>;
};

export type UpdateTrailRouteInput = {
  data?: InputMaybe<EditTrailRouteInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateTrailRoutePayload = {
  __typename?: 'updateTrailRoutePayload';
  trailRoute?: Maybe<TrailRoute>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  birthdate: Scalars['Date'];
  sex: Enum_Userspermissionsuser_Sex;
  userType?: InputMaybe<Enum_Userspermissionsuser_Usertype>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'createUserPayload', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null };

export type CreateTrailMutationVariables = Exact<{
  userId: Scalars['ID'];
  inversePath: Scalars['Boolean'];
  modality: Enum_Trails_Modality;
  startedAt: Scalars['DateTime'];
}>;


export type CreateTrailMutation = { __typename?: 'Mutation', createTrail?: { __typename?: 'createTrailPayload', trail?: { __typename?: 'Trails', id: string } | null } | null };

export type CreateTrailRouteMutationVariables = Exact<{
  trailId: Scalars['ID'];
  routeId: Scalars['ID'];
}>;


export type CreateTrailRouteMutation = { __typename?: 'Mutation', createTrailRoute?: { __typename?: 'createTrailRoutePayload', trailRoute?: { __typename?: 'TrailRoute', id: string } | null } | null };

export type UpdateTrailRouteMutationVariables = Exact<{
  trailRouteId: Scalars['ID'];
  finishedAt?: InputMaybe<Scalars['DateTime']>;
}>;


export type UpdateTrailRouteMutation = { __typename?: 'Mutation', updateTrailRoute?: { __typename?: 'updateTrailRoutePayload', trailRoute?: { __typename?: 'TrailRoute', id: string } | null } | null };

export type UpdateTrailMutationVariables = Exact<{
  trailId: Scalars['ID'];
  inversePath?: InputMaybe<Scalars['Boolean']>;
  modality?: InputMaybe<Enum_Trails_Modality>;
}>;


export type UpdateTrailMutation = { __typename?: 'Mutation', updateTrail?: { __typename?: 'updateTrailPayload', trail?: { __typename?: 'Trails', id: string } | null } | null };

export type DeleteTrailRouteMutationVariables = Exact<{
  trailRouteId: Scalars['ID'];
}>;


export type DeleteTrailRouteMutation = { __typename?: 'Mutation', deleteTrailRoute?: { __typename?: 'deleteTrailRoutePayload', trailRoute?: { __typename?: 'TrailRoute', id: string } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  sex?: InputMaybe<Enum_Userspermissionsuser_Sex>;
  avatar?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'updateUserPayload', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email: string, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, type?: string | null } | null } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'UserPermissionsPasswordPayload', ok: boolean } | null };

export type ResetPasswordMutationVariables = Exact<{
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'UsersPermissionsLoginPayload', user: { __typename?: 'UsersPermissionsMe', id: string } } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'UsersPermissionsUser', id: string, name?: string | null, email: string, birthdate: any, sex?: Enum_Userspermissionsuser_Sex | null, userType: Enum_Userspermissionsuser_Usertype, merchantApproved?: boolean | null, merchantApprovedAt?: any | null, merchantRejectedReason?: string | null, businessName?: string | null, businessType?: string | null, businessAddress?: string | null, businessPhone?: string | null, merchantApprovedBy?: { __typename?: 'UsersPermissionsUser', id: string, name?: string | null } | null, avatar?: { __typename?: 'UploadFile', url: string } | null, trails?: Array<{ __typename?: 'Trails', id: string, inversePaths: boolean, modality: Enum_Trails_Modality, startedAt: any, finishedAt?: any | null, certificate?: { __typename?: 'Certificate', file?: string | null } | null, routes?: Array<{ __typename?: 'TrailRoute', id: string, finishedAt?: any | null, created_at: any, route?: { __typename?: 'TrailParts', id: string } | null } | null> | null } | null> | null } | null };

export type GetRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoutesQuery = { __typename?: 'Query', trailParts?: Array<{ __typename?: 'TrailParts', id: string, name: string, difficulty: Enum_Trailparts_Difficulty, time: any, distance: number, description: string, slug: string, coverImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null, images?: Array<{ __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null> | null, fromCheckpoint?: { __typename?: 'Checkpoints', id: string, name: string, location?: { __typename?: 'ComponentGeneralLocation', x: number, y: number } | null, estabelecimentos?: Array<{ __typename?: 'Establishment', id: string, name: string, address?: string | null, email?: string | null, phone?: string | null, category: string, location?: { __typename?: 'ComponentGeneralLocation', x: number, y: number } | null } | null> | null } | null, toCheckpoint?: { __typename?: 'Checkpoints', id: string, name: string, location?: { __typename?: 'ComponentGeneralLocation', x: number, y: number } | null, estabelecimentos?: Array<{ __typename?: 'Establishment', id: string, name: string, address?: string | null, email?: string | null, phone?: string | null, category: string, location?: { __typename?: 'ComponentGeneralLocation', x: number, y: number } | null } | null> | null } | null } | null> | null };

export type GenerateCertificateMutationVariables = Exact<{
  trailId: Scalars['ID'];
}>;


export type GenerateCertificateMutation = { __typename?: 'Mutation', createCertificate?: { __typename?: 'createCertificatePayload', certificate?: { __typename?: 'Certificate', file?: string | null } | null } | null };

export type UploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadMutation = { __typename?: 'Mutation', upload: { __typename?: 'UploadFile', id: string, url: string } };


export const CreateUserDocument = `
    mutation createUser($name: String!, $email: String!, $password: String!, $birthdate: Date!, $sex: ENUM_USERSPERMISSIONSUSER_SEX!, $userType: ENUM_USERSPERMISSIONSUSER_USERTYPE) {
  createUser(
    input: {data: {name: $name, username: $email, nickname: $name, email: $email, password: $password, birthdate: $birthdate, sex: $sex, userType: $userType}}
  ) {
    user {
      id
    }
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['createUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
export const CreateTrailDocument = `
    mutation createTrail($userId: ID!, $inversePath: Boolean!, $modality: ENUM_TRAILS_MODALITY!, $startedAt: DateTime!) {
  createTrail(
    input: {data: {user: $userId, inversePaths: $inversePath, modality: $modality, startedAt: $startedAt}}
  ) {
    trail {
      id
    }
  }
}
    `;
export const useCreateTrailMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTrailMutation, TError, CreateTrailMutationVariables, TContext>) =>
    useMutation<CreateTrailMutation, TError, CreateTrailMutationVariables, TContext>(
      ['createTrail'],
      (variables?: CreateTrailMutationVariables) => fetcher<CreateTrailMutation, CreateTrailMutationVariables>(CreateTrailDocument, variables)(),
      options
    );
export const CreateTrailRouteDocument = `
    mutation createTrailRoute($trailId: ID!, $routeId: ID!) {
  createTrailRoute(input: {data: {trail: $trailId, route: $routeId}}) {
    trailRoute {
      id
    }
  }
}
    `;
export const useCreateTrailRouteMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateTrailRouteMutation, TError, CreateTrailRouteMutationVariables, TContext>) =>
    useMutation<CreateTrailRouteMutation, TError, CreateTrailRouteMutationVariables, TContext>(
      ['createTrailRoute'],
      (variables?: CreateTrailRouteMutationVariables) => fetcher<CreateTrailRouteMutation, CreateTrailRouteMutationVariables>(CreateTrailRouteDocument, variables)(),
      options
    );
export const UpdateTrailRouteDocument = `
    mutation updateTrailRoute($trailRouteId: ID!, $finishedAt: DateTime) {
  updateTrailRoute(
    input: {where: {id: $trailRouteId}, data: {finishedAt: $finishedAt}}
  ) {
    trailRoute {
      id
    }
  }
}
    `;
export const useUpdateTrailRouteMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateTrailRouteMutation, TError, UpdateTrailRouteMutationVariables, TContext>) =>
    useMutation<UpdateTrailRouteMutation, TError, UpdateTrailRouteMutationVariables, TContext>(
      ['updateTrailRoute'],
      (variables?: UpdateTrailRouteMutationVariables) => fetcher<UpdateTrailRouteMutation, UpdateTrailRouteMutationVariables>(UpdateTrailRouteDocument, variables)(),
      options
    );
export const UpdateTrailDocument = `
    mutation updateTrail($trailId: ID!, $inversePath: Boolean, $modality: ENUM_TRAILS_MODALITY) {
  updateTrail(
    input: {where: {id: $trailId}, data: {inversePaths: $inversePath, modality: $modality}}
  ) {
    trail {
      id
    }
  }
}
    `;
export const useUpdateTrailMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateTrailMutation, TError, UpdateTrailMutationVariables, TContext>) =>
    useMutation<UpdateTrailMutation, TError, UpdateTrailMutationVariables, TContext>(
      ['updateTrail'],
      (variables?: UpdateTrailMutationVariables) => fetcher<UpdateTrailMutation, UpdateTrailMutationVariables>(UpdateTrailDocument, variables)(),
      options
    );
export const DeleteTrailRouteDocument = `
    mutation deleteTrailRoute($trailRouteId: ID!) {
  deleteTrailRoute(input: {where: {id: $trailRouteId}}) {
    trailRoute {
      id
    }
  }
}
    `;
export const useDeleteTrailRouteMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteTrailRouteMutation, TError, DeleteTrailRouteMutationVariables, TContext>) =>
    useMutation<DeleteTrailRouteMutation, TError, DeleteTrailRouteMutationVariables, TContext>(
      ['deleteTrailRoute'],
      (variables?: DeleteTrailRouteMutationVariables) => fetcher<DeleteTrailRouteMutation, DeleteTrailRouteMutationVariables>(DeleteTrailRouteDocument, variables)(),
      options
    );
export const UpdateUserDocument = `
    mutation updateUser($userId: ID!, $name: String, $birthdate: Date, $sex: ENUM_USERSPERMISSIONSUSER_SEX, $avatar: ID) {
  updateUser(
    input: {where: {id: $userId}, data: {name: $name, birthdate: $birthdate, sex: $sex, avatar: $avatar}}
  ) {
    user {
      id
    }
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['updateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables)(),
      options
    );
export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(input: {identifier: $email, password: $password}) {
    jwt
    user {
      id
      username
      email
      role {
        id
        name
        type
      }
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const ForgotPasswordDocument = `
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export const useForgotPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>) =>
    useMutation<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>(
      ['forgotPassword'],
      (variables?: ForgotPasswordMutationVariables) => fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, variables)(),
      options
    );
export const ResetPasswordDocument = `
    mutation resetPassword($code: String!, $password: String!, $passwordConfirmation: String!) {
  resetPassword(
    code: $code
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    user {
      id
    }
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>) =>
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      ['resetPassword'],
      (variables?: ResetPasswordMutationVariables) => fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, variables)(),
      options
    );
export const GetUserDocument = `
    query getUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    birthdate
    sex
    userType
    merchantApproved
    merchantApprovedBy {
      id
      name
    }
    merchantApprovedAt
    merchantRejectedReason
    businessName
    businessType
    businessAddress
    businessPhone
    avatar {
      url
    }
    trails {
      id
      inversePaths
      modality
      startedAt
      finishedAt
      certificate {
        file
      }
      routes {
        id
        route {
          id
        }
        finishedAt
        created_at
      }
    }
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['getUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables),
      options
    );
export const GetRoutesDocument = `
    query getRoutes {
  trailParts {
    id
    name
    difficulty
    time
    distance
    coverImage {
      url
      width
      height
    }
    description
    slug
    images {
      url
      width
      height
    }
    fromCheckpoint {
      id
      name
      location {
        x
        y
      }
      estabelecimentos {
        id
        name
        address
        email
        phone
        category
        location {
          x
          y
        }
      }
    }
    toCheckpoint {
      id
      name
      location {
        x
        y
      }
      estabelecimentos {
        id
        name
        address
        email
        phone
        category
        location {
          x
          y
        }
      }
    }
  }
}
    `;
export const useGetRoutesQuery = <
      TData = GetRoutesQuery,
      TError = unknown
    >(
      variables?: GetRoutesQueryVariables,
      options?: UseQueryOptions<GetRoutesQuery, TError, TData>
    ) =>
    useQuery<GetRoutesQuery, TError, TData>(
      variables === undefined ? ['getRoutes'] : ['getRoutes', variables],
      fetcher<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, variables),
      options
    );
export const GenerateCertificateDocument = `
    mutation generateCertificate($trailId: ID!) {
  createCertificate(input: {data: {trail: $trailId}}) {
    certificate {
      file
    }
  }
}
    `;
export const useGenerateCertificateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<GenerateCertificateMutation, TError, GenerateCertificateMutationVariables, TContext>) =>
    useMutation<GenerateCertificateMutation, TError, GenerateCertificateMutationVariables, TContext>(
      ['generateCertificate'],
      (variables?: GenerateCertificateMutationVariables) => fetcher<GenerateCertificateMutation, GenerateCertificateMutationVariables>(GenerateCertificateDocument, variables)(),
      options
    );
export const UploadDocument = `
    mutation upload($file: Upload!) {
  upload(file: $file) {
    id
    url
  }
}
    `;
export const useUploadMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UploadMutation, TError, UploadMutationVariables, TContext>) =>
    useMutation<UploadMutation, TError, UploadMutationVariables, TContext>(
      ['upload'],
      (variables?: UploadMutationVariables) => fetcher<UploadMutation, UploadMutationVariables>(UploadDocument, variables)(),
      options
    );