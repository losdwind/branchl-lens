import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from './auth-fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlockchainData: { input: any; output: any; }
  BroadcastId: { input: any; output: any; }
  ChainId: { input: any; output: any; }
  CollectModuleData: { input: any; output: any; }
  ContentEncryptionKey: { input: any; output: any; }
  ContractAddress: { input: any; output: any; }
  CreateHandle: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DataAvailabilityId: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  EncryptedValueScalar: { input: any; output: any; }
  Ens: { input: any; output: any; }
  EthereumAddress: { input: any; output: any; }
  FollowModuleData: { input: any; output: any; }
  Handle: { input: any; output: any; }
  HandleClaimIdScalar: { input: any; output: any; }
  ImageSizeTransform: { input: any; output: any; }
  InternalPublicationId: { input: any; output: any; }
  IpfsCid: { input: any; output: any; }
  Jwt: { input: any; output: any; }
  LimitScalar: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Markdown: { input: any; output: any; }
  MimeType: { input: any; output: any; }
  NftGalleryId: { input: any; output: any; }
  NftGalleryName: { input: any; output: any; }
  NftOwnershipId: { input: any; output: any; }
  Nonce: { input: any; output: any; }
  NotificationId: { input: any; output: any; }
  ProfileId: { input: any; output: any; }
  ProfileInterest: { input: any; output: any; }
  ProxyActionId: { input: any; output: any; }
  PublicationId: { input: any; output: any; }
  PublicationTag: { input: any; output: any; }
  PublicationUrl: { input: any; output: any; }
  ReactionId: { input: any; output: any; }
  ReferenceModuleData: { input: any; output: any; }
  Search: { input: any; output: any; }
  Signature: { input: any; output: any; }
  Sources: { input: any; output: any; }
  TimestampScalar: { input: any; output: any; }
  TokenId: { input: any; output: any; }
  TxHash: { input: any; output: any; }
  TxId: { input: any; output: any; }
  UnixTimestamp: { input: any; output: any; }
  Url: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AaveFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit?: InputMaybe<Scalars['String']['input']>;
  /** The timestamp that this collect module will expire */
  endTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['input'];
};

export type AaveFeeCollectModuleSettings = {
  __typename?: 'AaveFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: Maybe<Scalars['String']['output']>;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The end timestamp after which collecting is impossible. No expiry if missing. */
  endTimestamp?: Maybe<Scalars['DateTime']['output']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['output'];
  /** Recipient of collect fees. */
  recipient: Scalars['EthereumAddress']['output'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: 'AccessConditionOutput';
  /** AND condition */
  and?: Maybe<AndConditionOutput>;
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>;
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>;
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>;
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>;
  /** OR condition */
  or?: Maybe<OrConditionOutput>;
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>;
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress']['input'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Scalars['CreateHandle']['input']>;
  overrideAlreadyClaimed: Scalars['Boolean']['input'];
  overrideTradeMark: Scalars['Boolean']['input'];
  secret: Scalars['String']['input'];
};

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']['input']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId']['input'];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars['Sources']['input']>;
};

export type AlreadyInvitedCheckRequest = {
  address: Scalars['EthereumAddress']['input'];
};

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: 'AndConditionOutput';
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String']['output'];
  contractAddress: Scalars['ContractAddress']['output'];
  currency: Scalars['ContractAddress']['output'];
  module: Scalars['String']['output'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']['input']>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']['input']>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']['input']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']['input']>>;
};

/** The Profile */
export type Attribute = {
  __typename?: 'Attribute';
  /** The display type */
  displayType?: Maybe<Scalars['String']['output']>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars['String']['output'];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']['output']>;
  /** Value attribute */
  value: Scalars['String']['output'];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String']['output'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt']['output'];
  /** The refresh token */
  refreshToken: Scalars['Jwt']['output'];
};

export type BroadcastDataAvailabilityUnion = CreateDataAvailabilityPublicationResult | RelayError;

export type BroadcastRequest = {
  id: Scalars['BroadcastId']['input'];
  signature: Scalars['Signature']['input'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId']['input'];
};

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse';
  result: Scalars['Boolean']['output'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  extraDetails?: Maybe<Scalars['String']['output']>;
  reasons?: Maybe<Array<DecryptFailReason>>;
  result: Scalars['Boolean']['output'];
};

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse';
  result: Scalars['Boolean']['output'];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress']['input'];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']['input']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']['input']>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean']['output'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The publication id that has to be collected to unlock content */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']['input']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: 'CollectConditionOutput';
  /** The publication id that has to be collected to unlock content */
  publicationId?: Maybe<Scalars['InternalPublicationId']['output']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectModule = AaveFeeCollectModuleSettings | Erc4626FeeCollectModuleSettings | FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | MultirecipientFeeCollectModuleSettings | RevertCollectModuleSettings | SimpleCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect aave fee collect module */
  aaveFeeCollectModule?: InputMaybe<AaveFeeCollectModuleParams>;
  /** The collect ERC4626 fee collect module */
  erc4626FeeCollectModule?: InputMaybe<Erc4626FeeCollectModuleParams>;
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The multirecipient fee collect module */
  multirecipientFeeCollectModule?: InputMaybe<MultirecipientFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']['input']>;
  /** The collect simple fee collect module */
  simpleCollectModule?: InputMaybe<SimpleCollectModuleParams>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  AaveFeeCollectModule = 'AaveFeeCollectModule',
  Erc4626FeeCollectModule = 'ERC4626FeeCollectModule',
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  MultirecipientFeeCollectModule = 'MultirecipientFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  SimpleCollectModule = 'SimpleCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  profile: Profile;
  timestamp: Scalars['DateTime']['output'];
};

/** The social comment */
export type Comment = {
  __typename?: 'Comment';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']['output']>;
  bookmarked: Scalars['Boolean']['output'];
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']['output']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime']['output'];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars['String']['output']>;
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars['Boolean']['output'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']['output'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId']['output'];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars['Boolean']['output'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']['output'];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']['output']>;
  notInterested: Scalars['Boolean']['output'];
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']['output'];
  /** The profile ref */
  profile: Profile;
  /** Comment ranking score */
  rankingScore?: Maybe<Scalars['Float']['output']>;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social comment */
export type CommentBookmarkedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']['input']>;
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentNotInterestedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The comment ordering types */
export enum CommentOrderingTypes {
  Desc = 'DESC',
  Ranking = 'RANKING'
}

/** The comment ranking filter types */
export enum CommentRankingFilter {
  NoneRelevant = 'NONE_RELEVANT',
  Relevant = 'RELEVANT'
}

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  tokenId: Scalars['String']['output'];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData']['output'];
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
  pubId: Scalars['PublicationId']['output'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId']['input'];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']['input']>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress']['output'];
  collectModuleInitData: Scalars['CollectModuleData']['output'];
  contentURI: Scalars['PublicationUrl']['output'];
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
  profileIdPointed: Scalars['ProfileId']['output'];
  pubIdPointed: Scalars['PublicationId']['output'];
  referenceModule: Scalars['ContractAddress']['output'];
  referenceModuleData: Scalars['ReferenceModuleData']['output'];
  referenceModuleInitData: Scalars['ReferenceModuleData']['output'];
};

export type CreateDataAvailabilityCommentRequest = {
  /** Publication your commenting on */
  commentOn: Scalars['InternalPublicationId']['input'];
  /** The metadata contentURI resolver */
  contentURI: Scalars['Url']['input'];
  /** Profile id */
  from: Scalars['ProfileId']['input'];
};

export type CreateDataAvailabilityMirrorRequest = {
  /** Profile id which will broadcast the mirror */
  from: Scalars['ProfileId']['input'];
  /** The publication to mirror */
  mirror: Scalars['InternalPublicationId']['input'];
};

export type CreateDataAvailabilityPostRequest = {
  /** The metadata contentURI resolver */
  contentURI: Scalars['Url']['input'];
  /** Profile id */
  from: Scalars['ProfileId']['input'];
};

export type CreateDataAvailabilityPublicationResult = {
  __typename?: 'CreateDataAvailabilityPublicationResult';
  /** The data availability id */
  dataAvailabilityId: Scalars['DataAvailabilityId']['output'];
  /** The id of the post */
  id: Scalars['InternalPublicationId']['output'];
  /** The proofs for the DA */
  proofs: Scalars['String']['output'];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']['output']>;
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileIds: Array<Scalars['ProfileId']['output']>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
  profileIdPointed: Scalars['ProfileId']['output'];
  pubIdPointed: Scalars['PublicationId']['output'];
  referenceModule: Scalars['ContractAddress']['output'];
  referenceModuleData: Scalars['ReferenceModuleData']['output'];
  referenceModuleInitData: Scalars['ReferenceModuleData']['output'];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId']['input'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress']['output'];
  collectModuleInitData: Scalars['CollectModuleData']['output'];
  contentURI: Scalars['PublicationUrl']['output'];
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
  referenceModule: Scalars['ContractAddress']['output'];
  referenceModuleInitData: Scalars['ReferenceModuleData']['output'];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']['input']>;
  handle: Scalars['CreateHandle']['input'];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']['input']>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata contentURI resolver */
  contentURI: Scalars['Url']['input'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId']['input'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url']['input'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url']['input'];
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  dispatcher: Scalars['EthereumAddress']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  followModule: Scalars['ContractAddress']['output'];
  followModuleInitData: Scalars['FollowModuleData']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId']['input'];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  followNFTURI: Scalars['Url']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']['input']>;
  profileId: Scalars['ProfileId']['input'];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  imageURI: Scalars['Url']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  metadata: Scalars['Url']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  enables: Array<Scalars['Boolean']['output']>;
  nonce: Scalars['Nonce']['output'];
  profileIds: Array<Scalars['ProfileId']['output']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']['input']>;
  profileIds: Array<Scalars['ProfileId']['input']>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

export type CurRequest = {
  secret: Scalars['String']['input'];
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

export type DataAvailabilityComment = {
  __typename?: 'DataAvailabilityComment';
  appId?: Maybe<Scalars['Sources']['output']>;
  commentedOnProfile: Profile;
  commentedOnPublicationId: Scalars['InternalPublicationId']['output'];
  createdAt: Scalars['DateTime']['output'];
  profile: Profile;
  publicationId: Scalars['InternalPublicationId']['output'];
  submitter: Scalars['EthereumAddress']['output'];
  transactionId: Scalars['String']['output'];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilityMirror = {
  __typename?: 'DataAvailabilityMirror';
  appId?: Maybe<Scalars['Sources']['output']>;
  createdAt: Scalars['DateTime']['output'];
  mirrorOfProfile: Profile;
  mirrorOfPublicationId: Scalars['InternalPublicationId']['output'];
  profile: Profile;
  publicationId: Scalars['InternalPublicationId']['output'];
  submitter: Scalars['EthereumAddress']['output'];
  transactionId: Scalars['String']['output'];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilityPost = {
  __typename?: 'DataAvailabilityPost';
  appId?: Maybe<Scalars['Sources']['output']>;
  createdAt: Scalars['DateTime']['output'];
  profile: Profile;
  publicationId: Scalars['InternalPublicationId']['output'];
  submitter: Scalars['EthereumAddress']['output'];
  transactionId: Scalars['String']['output'];
  verificationStatus: DataAvailabilityVerificationStatusUnion;
};

export type DataAvailabilitySubmitterResult = {
  __typename?: 'DataAvailabilitySubmitterResult';
  address: Scalars['EthereumAddress']['output'];
  name: Scalars['String']['output'];
  totalTransactions: Scalars['Int']['output'];
};

/** The paginated submitter results */
export type DataAvailabilitySubmittersResult = {
  __typename?: 'DataAvailabilitySubmittersResult';
  items: Array<DataAvailabilitySubmitterResult>;
  pageInfo: PaginatedResultInfo;
};

export type DataAvailabilitySummaryResult = {
  __typename?: 'DataAvailabilitySummaryResult';
  totalTransactions: Scalars['Int']['output'];
};

export type DataAvailabilityTransactionRequest = {
  /** The DA transaction id or internal publiation id */
  id: Scalars['String']['input'];
};

export type DataAvailabilityTransactionUnion = DataAvailabilityComment | DataAvailabilityMirror | DataAvailabilityPost;

export type DataAvailabilityTransactionsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type DataAvailabilityTransactionsResult = {
  __typename?: 'DataAvailabilityTransactionsResult';
  items: Array<DataAvailabilityTransactionUnion>;
  pageInfo: PaginatedResultInfo;
};

export type DataAvailabilityVerificationStatusFailure = {
  __typename?: 'DataAvailabilityVerificationStatusFailure';
  status?: Maybe<MomokaValidatorError>;
};

export type DataAvailabilityVerificationStatusSuccess = {
  __typename?: 'DataAvailabilityVerificationStatusSuccess';
  verified: Scalars['Boolean']['output'];
};

export type DataAvailabilityVerificationStatusUnion = DataAvailabilityVerificationStatusFailure | DataAvailabilityVerificationStatusSuccess;

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CanNotDecrypt = 'CAN_NOT_DECRYPT',
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress']['input'];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean']['input'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int']['input'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean']['input'];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean']['output'];
  contractAddress: Scalars['ContractAddress']['output'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int']['output'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean']['output'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type DismissRecommendedProfilesRequest = {
  profileIds: Array<Scalars['ProfileId']['input']>;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher';
  /** The dispatcher address */
  address: Scalars['EthereumAddress']['output'];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean']['output'];
  /** If the dispatcher transactions will be sponsored by lens aka cover the gas costs */
  sponsor: Scalars['Boolean']['output'];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress']['input'];
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress']['output'];
  /** If the user does follow */
  follows: Scalars['Boolean']['output'];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars['Boolean']['output'];
  /** The profile id */
  profileId: Scalars['ProfileId']['output'];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId']['output'];
  /** The name of the typed data domain */
  name: Scalars['String']['output'];
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress']['output'];
  /** The version */
  version: Scalars['String']['output'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String']['output'];
  /** The type of the typed data field */
  type: Scalars['String']['output'];
};

export type Erc4626FeeCollectModuleParams = {
  /** The collecting cost associated with this publication. 0 for free collect. */
  amount: ModuleFeeAmountParams;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: InputMaybe<Scalars['String']['input']>;
  /** The end timestamp after which collecting is impossible. Omit for no expiry. */
  endTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['input'];
  /** The address of the recipient who will recieve vault shares after depositing is completed. */
  recipient: Scalars['EthereumAddress']['input'];
  /** The referral fee associated with this publication. */
  referralFee?: InputMaybe<Scalars['Float']['input']>;
  /** The address of the ERC4626 vault to deposit funds to. */
  vault: Scalars['ContractAddress']['input'];
};

export type Erc4626FeeCollectModuleSettings = {
  __typename?: 'ERC4626FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']['output']>;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']['output']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['output'];
  /** The recipient of the ERC4626 vault shares */
  recipient: Scalars['EthereumAddress']['output'];
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
  /** The ERC4626 vault address */
  vault: Scalars['ContractAddress']['output'];
};

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  mirrorId: Scalars['InternalPublicationId']['output'];
  profile: Profile;
  timestamp: Scalars['DateTime']['output'];
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress']['output'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String']['output'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: 'EncryptedFieldsOutput';
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** The encrypted content field */
  content?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** The encrypted image field */
  image?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>;
};

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: 'EncryptedMedia';
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars['EncryptedValueScalar']['output']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']['output']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']['output']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']['output']>;
  /** The encrypted value for the URL */
  url: Scalars['Url']['output'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']['output']>;
};

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: 'EncryptedMediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>;
  /** Original media */
  original: EncryptedMedia;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>;
};

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: 'EncryptionParamsOutput';
  /** The access conditions */
  accessCondition: AccessConditionOutput;
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput;
  /** The encryption provider */
  encryptionProvider: EncryptionProvider;
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput;
};

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = 'LIT_PROTOCOL'
}

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']['output']>;
};

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress']['input'];
};

export type EoaOwnershipOutput = {
  __typename?: 'EoaOwnershipOutput';
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress']['output'];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  address: Scalars['ContractAddress']['output'];
  /** Decimal places for the token */
  decimals: Scalars['Int']['output'];
  /** Name of the symbol */
  name: Scalars['String']['output'];
  /** Symbol for the token */
  symbol: Scalars['String']['output'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']['output'];
};

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars['String']['input'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId']['input'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token ethereum address */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float']['input'];
};

export type Erc20OwnershipOutput = {
  __typename?: 'Erc20OwnershipOutput';
  /** The amount of tokens required to access the content */
  amount: Scalars['String']['output'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId']['output'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token ethereum address */
  contractAddress: Scalars['ContractAddress']['output'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float']['output'];
  /** The name of the ERC20 token */
  name: Scalars['String']['output'];
  /** The symbol of the ERC20 token */
  symbol: Scalars['String']['output'];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars['TimestampScalar']['input']>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']['input']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']['input']>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['input'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress']['output'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['output'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['output'];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId']['input'];
};

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId']['input'];
};

export type FollowConditionOutput = {
  __typename?: 'FollowConditionOutput';
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId']['output'];
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']['input']>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']['input']>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int']['output'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress']['output'];
  tokensIds: Array<Scalars['String']['output']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress']['input'];
  profileId: Scalars['ProfileId']['input'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  profileId: Scalars['ProfileId']['input'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int']['output'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress']['input'];
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
};

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId']['input'];
};

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId']['input'];
};

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars['ContentEncryptionKey']['input'];
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GciRequest = {
  hhh: Scalars['String']['input'];
  secret: Scalars['String']['input'];
  ttt: Scalars['String']['input'];
};

export type GcrRequest = {
  hhh: Scalars['String']['input'];
  secret: Scalars['String']['input'];
  ttt: Scalars['String']['input'];
};

export type GctRequest = {
  hhh: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

export type GddRequest = {
  domain: Scalars['Url']['input'];
  secret: Scalars['String']['input'];
};

export type GdmRequest = {
  secret: Scalars['String']['input'];
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData']['output'];
  from: Scalars['EthereumAddress']['output'];
  to: Scalars['ContractAddress']['output'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress']['input'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']['input']>;
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']['input']>;
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']['input']>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String']['input'];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']['input']>;
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
  txId?: InputMaybe<Scalars['TxId']['input']>;
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int']['output'];
  totalCollects: Scalars['Int']['output'];
  totalComments: Scalars['Int']['output'];
  totalFollows: Scalars['Int']['output'];
  totalMirrors: Scalars['Int']['output'];
  totalPosts: Scalars['Int']['output'];
  totalProfiles: Scalars['Int']['output'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']['input']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']['input']>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']['input']>;
};

export type HelRequest = {
  handle: Scalars['Handle']['input'];
  remove: Scalars['Boolean']['input'];
  secret: Scalars['String']['input'];
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

export type IdKitPhoneVerifyWebhookRequest = {
  sharedSecret: Scalars['String']['input'];
  worldcoin?: InputMaybe<WorldcoinPhoneVerifyWebhookRequest>;
};

/** The verify webhook result status type */
export enum IdKitPhoneVerifyWebhookResultStatusType {
  AlreadyVerified = 'ALREADY_VERIFIED',
  Success = 'SUCCESS'
}

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InRequest = {
  ethereumAddress: Scalars['EthereumAddress']['input'];
  numInvites: Scalars['Int']['input'];
  secret: Scalars['String']['input'];
};

export type InTotalRequest = {
  ethereumAddress: Scalars['EthereumAddress']['input'];
  secret: Scalars['String']['input'];
};

export type InternalPinRequest = {
  /** The shared secret */
  items: Array<Scalars['Url']['input']>;
  /** The shared secret */
  secret: Scalars['String']['input'];
};

export type InternalPinResult = {
  __typename?: 'InternalPinResult';
  ipfs: Scalars['String']['output'];
  referenceItem: Scalars['Url']['output'];
};

export type InviteRequest = {
  invites: Array<Scalars['EthereumAddress']['input']>;
  secret: Scalars['String']['input'];
};

export type InvitedResult = {
  __typename?: 'InvitedResult';
  address: Scalars['EthereumAddress']['output'];
  when?: Maybe<Scalars['DateTime']['output']>;
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String']['input'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['input'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String']['output'];
  contractAddress: Scalars['ContractAddress']['output'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['output'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String']['input'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['input'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String']['output'];
  contractAddress: Scalars['ContractAddress']['output'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime']['output'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['output'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress']['output'];
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  data: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  removed: Scalars['Boolean']['output'];
  topics: Array<Scalars['String']['output']>;
  transactionHash: Scalars['TxHash']['output'];
  transactionIndex: Scalars['Int']['output'];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: 'Media';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']['output']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']['output']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']['output']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']['output']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']['output']>;
  /** The token image nft */
  url: Scalars['Url']['output'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']['output']>;
};

/** Media object output */
export type MediaOutput = {
  __typename?: 'MediaOutput';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']['output']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']['output']>;
  item: Scalars['Url']['output'];
  source?: Maybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: Maybe<Scalars['MimeType']['output']>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null - use transform function to get small media
   */
  medium?: Maybe<Media>;
  /** Original media as found on the publication metadata */
  onChain: Media;
  /** Optimized media, snapshotted and served from a CDN */
  optimized?: Maybe<Media>;
  /** On-chain or snapshotted media on a CDN */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null - use transform function to get small media
   */
  small?: Maybe<Media>;
  transformed?: Maybe<Media>;
};


/** The Media Set */
export type MediaSetTransformedArgs = {
  params: MediaTransformParams;
};

export type MediaTransformParams = {
  /** Set the transformed image's height. You can use specific size in pixels eg. 100px, a percentage eg. 50% or set as 'auto' to be set automatically. Default value is 'auto'. */
  height?: InputMaybe<Scalars['ImageSizeTransform']['input']>;
  /** Set if you want to keep the image's original aspect ratio. True by default. If explicitly set to false, the image will stretch based on the width and height values. */
  keepAspectRatio?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set the transformed image's width. You can use specific size in pixels eg. 100px, a percentage eg. 50% or set as 'auto' to be set automatically. Default value is 'auto'. */
  width?: InputMaybe<Scalars['ImageSizeTransform']['input']>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars['String']['input'];
  /** The value */
  value: Scalars['String']['input'];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']['output']>;
  /** The value */
  value?: Maybe<Scalars['String']['output']>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars['Url']['output']>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']['output']>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']['output']>;
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']['output']>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars['Locale']['output']>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars['String']['output']>;
  /** The tags for the publication */
  tags: Array<Scalars['String']['output']>;
};

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']['output']>;
  bookmarked: Scalars['Boolean']['output'];
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']['output']>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime']['output'];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars['String']['output']>;
  hasCollectedByMe: Scalars['Boolean']['output'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']['output'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId']['output'];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars['Boolean']['output'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']['output'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  notInterested: Scalars['Boolean']['output'];
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']['output'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social mirror */
export type MirrorBookmarkedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']['input']>;
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The social mirror */
export type MirrorNotInterestedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  profile: Profile;
  timestamp: Scalars['DateTime']['output'];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFee = {
  __typename?: 'ModuleFee';
  /** The fee amount */
  amount: ModuleFeeAmount;
  /** The fee recipient */
  recipient: Scalars['EthereumAddress']['output'];
  /** The referral fee */
  referralFee: Scalars['Float']['output'];
};

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']['output'];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress']['input'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String']['input'];
};

export type ModuleFeeParams = {
  /** The fee amount */
  amount: ModuleFeeAmountParams;
  /** The fee recipient */
  recipient: Scalars['EthereumAddress']['input'];
  /** The referral fee */
  referralFee: Scalars['Float']['input'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** The momka validator error */
export enum MomokaValidatorError {
  BlockCantBeReadFromNode = 'BLOCK_CANT_BE_READ_FROM_NODE',
  BlockTooFar = 'BLOCK_TOO_FAR',
  CanNotConnectToBundlr = 'CAN_NOT_CONNECT_TO_BUNDLR',
  ChainSignatureAlreadyUsed = 'CHAIN_SIGNATURE_ALREADY_USED',
  DataCantBeReadFromNode = 'DATA_CANT_BE_READ_FROM_NODE',
  EventMismatch = 'EVENT_MISMATCH',
  GeneratedPublicationIdMismatch = 'GENERATED_PUBLICATION_ID_MISMATCH',
  InvalidEventTimestamp = 'INVALID_EVENT_TIMESTAMP',
  InvalidFormattedTypedData = 'INVALID_FORMATTED_TYPED_DATA',
  InvalidPointerSetNotNeeded = 'INVALID_POINTER_SET_NOT_NEEDED',
  InvalidSignatureSubmitter = 'INVALID_SIGNATURE_SUBMITTER',
  InvalidTxId = 'INVALID_TX_ID',
  InvalidTypedDataDeadlineTimestamp = 'INVALID_TYPED_DATA_DEADLINE_TIMESTAMP',
  NotClosestBlock = 'NOT_CLOSEST_BLOCK',
  NoSignatureSubmitter = 'NO_SIGNATURE_SUBMITTER',
  PointerFailedVerification = 'POINTER_FAILED_VERIFICATION',
  PotentialReorg = 'POTENTIAL_REORG',
  PublicationNonceInvalid = 'PUBLICATION_NONCE_INVALID',
  PublicationNoneDa = 'PUBLICATION_NONE_DA',
  PublicationNoPointer = 'PUBLICATION_NO_POINTER',
  PublicationSignerNotAllowed = 'PUBLICATION_SIGNER_NOT_ALLOWED',
  SimulationFailed = 'SIMULATION_FAILED',
  SimulationNodeCouldNotRun = 'SIMULATION_NODE_COULD_NOT_RUN',
  TimestampProofInvalidDaId = 'TIMESTAMP_PROOF_INVALID_DA_ID',
  TimestampProofInvalidSignature = 'TIMESTAMP_PROOF_INVALID_SIGNATURE',
  TimestampProofInvalidType = 'TIMESTAMP_PROOF_INVALID_TYPE',
  TimestampProofNotSubmitter = 'TIMESTAMP_PROOF_NOT_SUBMITTER',
  Unknown = 'UNKNOWN'
}

export type MultirecipientFeeCollectModuleParams = {
  /** The collecting cost associated with this publication. 0 for free collect. */
  amount: ModuleFeeAmountParams;
  /** The maximum number of collects for this publication. Omit for no limit. */
  collectLimit?: InputMaybe<Scalars['String']['input']>;
  /** The end timestamp after which collecting is impossible. Omit for no expiry. */
  endTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['input'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataInput>;
  /** The referral fee associated with this publication. */
  referralFee?: InputMaybe<Scalars['Float']['input']>;
};

export type MultirecipientFeeCollectModuleSettings = {
  __typename?: 'MultirecipientFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']['output']>;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']['output']>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['output'];
  /** Recipient of collect fees. */
  recipients: Array<RecipientDataOutput>;
  /** The referral fee associated with this publication. */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']['output']>;
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars['Void']['output']>;
  addPublicationProfileBookmark?: Maybe<Scalars['Void']['output']>;
  addPublicationProfileNotInterested?: Maybe<Scalars['Void']['output']>;
  addReaction?: Maybe<Scalars['Void']['output']>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  broadcastDataAvailability: BroadcastDataAvailabilityUnion;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createDataAvailabilityCommentTypedData: CreateCommentBroadcastItemResult;
  createDataAvailabilityCommentViaDispatcher: RelayDataAvailabilityResult;
  createDataAvailabilityMirrorTypedData: CreateMirrorBroadcastItemResult;
  createDataAvailabilityMirrorViaDispatcher: RelayDataAvailabilityResult;
  createDataAvailabilityPostTypedData: CreatePostBroadcastItemResult;
  createDataAvailabilityPostViaDispatcher: RelayDataAvailabilityResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  /** Create a new NFT gallery */
  createNftGallery: Scalars['NftGalleryId']['output'];
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetFollowNFTUriViaDispatcher: RelayResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  /** Delete an NFT Gallery */
  deleteNftGallery?: Maybe<Scalars['Void']['output']>;
  dismissRecommendedProfiles?: Maybe<Scalars['Void']['output']>;
  dss?: Maybe<Scalars['Void']['output']>;
  gci?: Maybe<Scalars['Void']['output']>;
  gcr?: Maybe<Scalars['Void']['output']>;
  gdi?: Maybe<Scalars['Void']['output']>;
  hel?: Maybe<Scalars['Void']['output']>;
  hidePublication?: Maybe<Scalars['Void']['output']>;
  idKitPhoneVerifyWebhook: IdKitPhoneVerifyWebhookResultStatusType;
  in?: Maybe<Scalars['Void']['output']>;
  invite?: Maybe<Scalars['Void']['output']>;
  nni?: Maybe<Scalars['Void']['output']>;
  nnv?: Maybe<Scalars['Void']['output']>;
  proxyAction: Scalars['ProxyActionId']['output'];
  refresh: AuthenticationResult;
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars['Void']['output']>;
  removePublicationProfileBookmark?: Maybe<Scalars['Void']['output']>;
  removePublicationProfileNotInterested?: Maybe<Scalars['Void']['output']>;
  removeReaction?: Maybe<Scalars['Void']['output']>;
  reportPublication?: Maybe<Scalars['Void']['output']>;
  /** Update the name of an NFT gallery */
  updateNftGalleryInfo?: Maybe<Scalars['Void']['output']>;
  /** Add and/or remove NFTs to a gallery */
  updateNftGalleryItems?: Maybe<Scalars['Void']['output']>;
  /** Update the order of NFTs in a gallery */
  updateNftGalleryOrder?: Maybe<Scalars['Void']['output']>;
};


export type MutationAchArgs = {
  request: AchRequest;
};


export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};


export type MutationAddPublicationProfileBookmarkArgs = {
  request: PublicationProfileBookmarkRequest;
};


export type MutationAddPublicationProfileNotInterestedArgs = {
  request: PublicationProfileNotInterestedRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationBroadcastDataAvailabilityArgs = {
  request: BroadcastRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateDataAvailabilityCommentTypedDataArgs = {
  request: CreateDataAvailabilityCommentRequest;
};


export type MutationCreateDataAvailabilityCommentViaDispatcherArgs = {
  request: CreateDataAvailabilityCommentRequest;
};


export type MutationCreateDataAvailabilityMirrorTypedDataArgs = {
  request: CreateDataAvailabilityMirrorRequest;
};


export type MutationCreateDataAvailabilityMirrorViaDispatcherArgs = {
  request: CreateDataAvailabilityMirrorRequest;
};


export type MutationCreateDataAvailabilityPostTypedDataArgs = {
  request: CreateDataAvailabilityPostRequest;
};


export type MutationCreateDataAvailabilityPostViaDispatcherArgs = {
  request: CreateDataAvailabilityPostRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetFollowNftUriViaDispatcherArgs = {
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};


export type MutationDismissRecommendedProfilesArgs = {
  request: DismissRecommendedProfilesRequest;
};


export type MutationDssArgs = {
  request: PrfRequest;
};


export type MutationGciArgs = {
  request: GciRequest;
};


export type MutationGcrArgs = {
  request: GcrRequest;
};


export type MutationGdiArgs = {
  request: GddRequest;
};


export type MutationHelArgs = {
  request: HelRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationIdKitPhoneVerifyWebhookArgs = {
  request: IdKitPhoneVerifyWebhookRequest;
};


export type MutationInArgs = {
  request: InRequest;
};


export type MutationInviteArgs = {
  request: InviteRequest;
};


export type MutationNniArgs = {
  request: NniRequest;
};


export type MutationNnvArgs = {
  request: NnvRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};


export type MutationRemovePublicationProfileBookmarkArgs = {
  request: PublicationProfileBookmarkRequest;
};


export type MutationRemovePublicationProfileNotInterestedArgs = {
  request: PublicationProfileNotInterestedRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};


export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};


export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};


export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The profile id your viewing */
  viewingProfileId: Scalars['ProfileId']['input'];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars['ProfileId']['input'];
};

/** The nft type */
export type Nft = {
  __typename?: 'NFT';
  /** aka "1"  */
  chainId: Scalars['ChainId']['output'];
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String']['output'];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String']['output'];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress']['output'];
  /** aka us CryptoKitties */
  contractName: Scalars['String']['output'];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String']['output'];
  /** aka "ERC721"  */
  ercType: Scalars['String']['output'];
  /** aka "Beard Coffee"  */
  name: Scalars['String']['output'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars['String']['output'];
  /** aka "13"  */
  tokenId: Scalars['String']['output'];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']['output']>;
  /** The meta type content */
  metaType: Scalars['String']['output'];
  /** The token uri  nft */
  uri: Scalars['String']['output'];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId']['input'];
  /** The signature */
  signature: Scalars['Signature']['input'];
};

/** NFT search query */
export type NftSearchRequest = {
  /** Chain IDs to search. Supports Ethereum and Polygon. If omitted, it will search in both chains */
  chainIds?: InputMaybe<Array<Scalars['ChainId']['input']>>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** Exclude follower NFTs from the search */
  excludeFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** Ethereum address of the owner. If unknown you can also search by profile ID */
  ownerAddress?: InputMaybe<Scalars['EthereumAddress']['input']>;
  /** Profile ID of the owner */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** Search query. Has to be part of a collection name */
  query: Scalars['String']['input'];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds?: InputMaybe<Array<Scalars['ChainId']['input']>>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']['input']>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** Exclude filtered collection addresses from the search. Cannot be used together ith `includeCollections` */
  excludeCollections?: InputMaybe<Array<NftCollectionInput>>;
  /** Exclude follower NFTs from the search. */
  excludeFollowers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include only filtered collection addresses in the search. Overrides `contractAddress` */
  includeCollections?: InputMaybe<Array<NftCollectionInput>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress']['input'];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime']['output'];
  notificationId: Scalars['NotificationId']['output'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime']['output'];
  notificationId: Scalars['NotificationId']['output'];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime']['output'];
  isFollowedByMe: Scalars['Boolean']['output'];
  notificationId: Scalars['NotificationId']['output'];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification';
  createdAt: Scalars['DateTime']['output'];
  mentionPublication: MentionPublication;
  notificationId: Scalars['NotificationId']['output'];
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime']['output'];
  notificationId: Scalars['NotificationId']['output'];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification';
  createdAt: Scalars['DateTime']['output'];
  notificationId: Scalars['NotificationId']['output'];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

export type Nfi = {
  c: Scalars['ContractAddress']['input'];
  i: Scalars['ChainId']['input'];
};

/** NFT collection filtering input */
export type NftCollectionInput = {
  /** The chain id that the collection exists in */
  chainId: Scalars['ChainId']['input'];
  /** Filter by NFT collection contract address */
  contractAddress: Scalars['ContractAddress']['input'];
};

/** The NFT gallery input */
export type NftGalleriesRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** The NFT gallery */
export type NftGallery = {
  __typename?: 'NftGallery';
  /** The creation date */
  createdAt: Scalars['DateTime']['output'];
  /** The NFT gallery id */
  id: Scalars['NftGalleryId']['output'];
  /** The NFTs in the gallery */
  items: Array<Nft>;
  /** The NFT gallery name */
  name: Scalars['String']['output'];
  /** The owning profile id */
  profileId: Scalars['ProfileId']['output'];
  /** The last update date */
  updatedAt: Scalars['DateTime']['output'];
};

/** The input for creating a new NFT gallery */
export type NftGalleryCreateRequest = {
  /** The NFTs in the gallery */
  items: Array<NftInput>;
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName']['input'];
  /** The owner profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for deleting gallery */
export type NftGalleryDeleteRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for updating NFT gallery name */
export type NftGalleryUpdateInfoRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
};

/** The input for reordering gallery items */
export type NftGalleryUpdateItemOrderRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
  /** The order of the NFTs in the gallery */
  updates: Array<NftUpdateItemOrder>;
};

/** The input for adding/removing gallery items */
export type NftGalleryUpdateItemsRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId']['input'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId']['input'];
  /** The contents of the NFT gallery */
  toAdd?: InputMaybe<Array<NftInput>>;
  /** The contents of the NFT gallery */
  toRemove?: InputMaybe<Array<NftInput>>;
};

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['Int']['output'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress']['output'];
  /** The token id of the nft */
  tokenId: Scalars['String']['output'];
  /** The token image nft */
  uri: Scalars['Url']['output'];
  /** If the NFT is verified */
  verified: Scalars['Boolean']['output'];
};

/** The NFT input for gallery */
export type NftInput = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId']['input'];
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The token ID of the NFT */
  tokenId: Scalars['String']['input'];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId']['input'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress']['input'];
  /** Token id for NFT */
  tokenId: Scalars['String']['input'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress']['input'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId']['output'];
  text: Scalars['String']['output'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar']['output'];
};

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars['ChainId']['input'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Array<Scalars['TokenId']['input']>>;
};

export type NftOwnershipOutput = {
  __typename?: 'NftOwnershipOutput';
  /** The NFT chain id */
  chainID: Scalars['ChainId']['output'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress']['output'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Array<Scalars['TokenId']['output']>>;
};

/** The input for updating the order of a NFT gallery item */
export type NftUpdateItemOrder = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId']['input'];
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress']['input'];
  /** The new order of the NFT in the gallery */
  newOrder: Scalars['Int']['input'];
  /** The token ID of the NFT */
  tokenId: Scalars['String']['input'];
};

export type NniRequest = {
  n: Array<Nfi>;
  secret: Scalars['String']['input'];
};

export type NnvRequest = {
  n: Array<Nfi>;
  secret: Scalars['String']['input'];
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMentionNotification | NewMirrorNotification | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  highSignalFilter?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The notification types */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean']['output'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: 'OrConditionOutput';
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress']['output'];
  /** number of tokens owner */
  amount: Scalars['Float']['output'];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated for you result */
export type PaginatedForYouResult = {
  __typename?: 'PaginatedForYouResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult';
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']['output']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']['output']>;
  /**
   * The total number of entities the pagination iterates over. If its null then its not been worked out due to it being an expensive query and not really needed for the client. All main counters are in counter tables to allow them to be faster fetching.
   * @deprecated Total counts is expensive and in dynamic nature of queries it slows stuff down. Most the time you do not need this you can just use the `next` property to see if there is more data. This will be removed soon. The only use case anyone is using this right now is on notification query, this should be changed to query the notifications and cache the last notification id. You can then keep checking if the id changes you know more notifications.
   */
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** The paginated result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: 'Post';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']['output']>;
  bookmarked: Scalars['Boolean']['output'];
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']['output']>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime']['output'];
  /** The data availability proofs you can fetch from */
  dataAvailabilityProofs?: Maybe<Scalars['String']['output']>;
  hasCollectedByMe: Scalars['Boolean']['output'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean']['output'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId']['output'];
  /** Indicates if the publication is data availability post */
  isDataAvailability: Scalars['Boolean']['output'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean']['output'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']['output']>;
  notInterested: Scalars['Boolean']['output'];
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String']['output'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social post */
export type PostBookmarkedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']['input']>;
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostNotInterestedArgs = {
  by?: InputMaybe<Scalars['ProfileId']['input']>;
};


/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type PrfRequest = {
  dd: Scalars['Boolean']['input'];
  hhh: Scalars['String']['input'];
  secret: Scalars['String']['input'];
  ss: Scalars['Boolean']['input'];
};

export type PrfResponse = {
  __typename?: 'PrfResponse';
  dd: Scalars['Boolean']['output'];
  ss: Scalars['Boolean']['output'];
};

export type PriRequest = {
  hhh: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']['output']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars['ContractAddress']['output']>;
  /** The profile handle */
  handle: Scalars['Handle']['output'];
  /** The profile id */
  id: Scalars['ProfileId']['output'];
  /** The profile interests */
  interests?: Maybe<Array<Scalars['ProfileInterest']['output']>>;
  invitedBy?: Maybe<Profile>;
  /** Is the profile default */
  isDefault: Scalars['Boolean']['output'];
  isFollowedByMe: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  /** Metadata url */
  metadata?: Maybe<Scalars['Url']['output']>;
  /** Name of the profile */
  name?: Maybe<Scalars['String']['output']>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress']['output'];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};


/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']['input']>;
};


/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId']['input'];
  redeemingProfileId: Scalars['ProfileId']['input'];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId']['input'];
};

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
};

export type ProfileGuardianRequest = {
  profileId: Scalars['ProfileId']['input'];
};

export type ProfileGuardianResult = {
  __typename?: 'ProfileGuardianResult';
  disablingProtectionTimestamp?: Maybe<Scalars['DateTime']['output']>;
  protected: Scalars['Boolean']['output'];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']['input']>;
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: 'ProfileOwnershipOutput';
  /** The profile id */
  profileId: Scalars['ProfileId']['output'];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']['input']>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']['input']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']['input']>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  commentsTotal: Scalars['Int']['output'];
  id: Scalars['ProfileId']['output'];
  mirrorsTotal: Scalars['Int']['output'];
  postsTotal: Scalars['Int']['output'];
  publicationsTotal: Scalars['Int']['output'];
  /** Total collects count */
  totalCollects: Scalars['Int']['output'];
  /** Total comment count */
  totalComments: Scalars['Int']['output'];
  /** Total follower count */
  totalFollowers: Scalars['Int']['output'];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int']['output'];
  /** Total mirror count */
  totalMirrors: Scalars['Int']['output'];
  /** Total post count */
  totalPosts: Scalars['Int']['output'];
  /** Total publication count */
  totalPublications: Scalars['Int']['output'];
};


/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']['input']>;
};


/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']['input']>;
};


/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']['input']>;
};


/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']['input']>;
};

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: 'ProviderSpecificParamsOutput';
  /** The encryption key */
  encryptionKey: Scalars['ContentEncryptionKey']['output'];
};

export type ProxyActionError = {
  __typename?: 'ProxyActionError';
  lastKnownTxId?: Maybe<Scalars['TxId']['output']>;
  reason: Scalars['String']['output'];
};

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued';
  queuedAt: Scalars['DateTime']['output'];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult';
  status: ProxyActionStatusTypes;
  txHash: Scalars['TxHash']['output'];
  txId: Scalars['TxId']['output'];
};

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']['input']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']['input']>;
  /** Pre calculated cid of the file to push */
  itemCid: Scalars['IpfsCid']['input'];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']['input']>;
};

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: 'PublicMediaResults';
  /** ipfs uri to add on the metadata */
  media: MediaOutput;
  /** Signed url to push the file */
  signedUrl: Scalars['String']['output'];
};

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post;

export type PublicationForYouRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  for: Scalars['ProfileId']['input'];
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
};

/** The publication main focus */
export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = 'LENS'
}

/** Publication metadata content warning filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars['Locale']['input']>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']['input']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']['input']>;
  item: Scalars['Url']['input'];
  source?: InputMaybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']['input']>;
};

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']['output']>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to match all */
  all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']['input']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']['input']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']['input']>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']['input']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']['input']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']['input']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']['input']>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String']['input'];
  /** Name of the item. */
  name: Scalars['String']['input'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String']['input'];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']['input']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']['input']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']['input']>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']['input']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']['input']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']['input']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']['input']>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars['Locale']['input'];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String']['input'];
  /** Name of the item. */
  name: Scalars['String']['input'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String']['input'];
};

export type PublicationProfileBookmarkRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId']['input'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

export type PublicationProfileNotInterestedRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId']['input'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']['input']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']['input']>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  LowSignal = 'LOW_SIGNAL',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars['String']['input'];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats';
  commentsTotal: Scalars['Int']['output'];
  /** The publication id */
  id: Scalars['InternalPublicationId']['output'];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int']['output'];
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int']['output'];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int']['output'];
  /** The total amount of bookmarks */
  totalBookmarks: Scalars['Int']['output'];
  /** The total amount of upvotes */
  totalDownvotes: Scalars['Int']['output'];
  /** The total amount of downvotes */
  totalUpvotes: Scalars['Int']['output'];
};


/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  forSources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type PublicationsProfileBookmarkedQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars['ProfileId']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']['input']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']['input']>;
  /** The comment ordering type - only used when you use commentsOf */
  commentsOfOrdering?: InputMaybe<CommentOrderingTypes>;
  /** The comment ranking filter, you can use  - only used when you use commentsOf + commentsOfOrdering=ranking */
  commentsRankingFilter?: InputMaybe<CommentRankingFilter>;
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']['input']>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']['input']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  alreadyInvited: Scalars['Boolean']['output'];
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  cur: Array<Scalars['String']['output']>;
  dataAvailabilitySubmitters: DataAvailabilitySubmittersResult;
  dataAvailabilitySummary: DataAvailabilitySummaryResult;
  dataAvailabilityTransaction?: Maybe<DataAvailabilityTransactionUnion>;
  dataAvailabilityTransactions: DataAvailabilityTransactionsResult;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  /** Get publications recommended for you - will only return posts for now */
  forYou: PaginatedForYouResult;
  gct: Array<Scalars['String']['output']>;
  gdm: Array<Scalars['Url']['output']>;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPin: Array<InternalPinResult>;
  intotal: Scalars['Int']['output'];
  invited: Array<InvitedResult>;
  invitesLeft: Scalars['Int']['output'];
  isIDKitPhoneVerified: Scalars['Boolean']['output'];
  iss: PrfResponse;
  mutualFollowersProfiles: PaginatedProfileResult;
  /** Get all NFT galleries for a profile */
  nftGalleries: Array<NftGallery>;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  /** Get the NFTs that the given wallet or profileId owns. Only supports Ethereum and Polygon NFTs. Note excludeFollowers is set to true by default, so the result will not include Lens Follower NFTs unless explicitly requested. */
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars['Boolean']['output'];
  profileFollowRevenue: FollowRevenueResult;
  profileGuardianInformation: ProfileGuardianResult;
  /** Get the list of profile interests */
  profileInterests: Array<Scalars['ProfileInterest']['output']>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  publicationsProfileBookmarks: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars['Void']['output']>;
  relayQueues: Array<RelayQueueResult>;
  search: SearchResult;
  /** Search for NFTs in a wallet by collection name. Supports Polygon and Ethereum and searches in both by default. */
  searchNfts: NfTsResult;
  txIdToTxHash: Scalars['TxHash']['output'];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean']['output'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QueryAlreadyInvitedArgs = {
  request: AlreadyInvitedCheckRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryCurArgs = {
  request: CurRequest;
};


export type QueryDataAvailabilityTransactionArgs = {
  request: DataAvailabilityTransactionRequest;
};


export type QueryDataAvailabilityTransactionsArgs = {
  request?: InputMaybe<DataAvailabilityTransactionsRequest>;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryForYouArgs = {
  request: PublicationForYouRequest;
};


export type QueryGctArgs = {
  request: GctRequest;
};


export type QueryGdmArgs = {
  request: GdmRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryInternalPinArgs = {
  request: InternalPinRequest;
};


export type QueryIntotalArgs = {
  request: InTotalRequest;
};


export type QueryIssArgs = {
  request: PriRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryNftGalleriesArgs = {
  request: NftGalleriesRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryProfileGuardianInformationArgs = {
  request: ProfileGuardianRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId']['input'];
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryPublicationsProfileBookmarksArgs = {
  request: PublicationsProfileBookmarkedQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryRelArgs = {
  request: RelRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QuerySearchNftsArgs = {
  request: NftSearchRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId']['input'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars['DateTime']['output'];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId']['input'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecipientDataInput = {
  /** Recipient of collect fees. */
  recipient: Scalars['EthereumAddress']['input'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float']['input'];
};

export type RecipientDataOutput = {
  __typename?: 'RecipientDataOutput';
  /** Recipient of collect fees. */
  recipient: Scalars['EthereumAddress']['output'];
  /** Split %, should be between 0.01 and 100. Up to 2 decimal points supported. All % should add up to 100 */
  split: Scalars['Float']['output'];
};

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars['Boolean']['input']>;
  /** The more advanced who to follow you should pass this in */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of separation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt']['input'];
};

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress']['input'];
  secret: Scalars['String']['input'];
};

export type RelayDataAvailabilityResult = CreateDataAvailabilityPublicationResult | RelayError;

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

/** The  */
export type RelayQueueResult = {
  __typename?: 'RelayQueueResult';
  /** The address of the relay */
  address: Scalars['EthereumAddress']['output'];
  /** The queue on the relay */
  queue: Scalars['Float']['output'];
  /** The relayer name */
  relayer: RelayRoleKey;
};

export type RelayResult = RelayError | RelayerResult;

/** The relay role key */
export enum RelayRoleKey {
  CreateProfile = 'CREATE_PROFILE',
  Dispatcher_1 = 'DISPATCHER_1',
  Dispatcher_2 = 'DISPATCHER_2',
  Dispatcher_3 = 'DISPATCHER_3',
  Dispatcher_4 = 'DISPATCHER_4',
  Dispatcher_5 = 'DISPATCHER_5',
  Dispatcher_6 = 'DISPATCHER_6',
  Dispatcher_7 = 'DISPATCHER_7',
  Dispatcher_8 = 'DISPATCHER_8',
  Dispatcher_9 = 'DISPATCHER_9',
  Dispatcher_10 = 'DISPATCHER_10',
  ProxyActionCollect_1 = 'PROXY_ACTION_COLLECT_1',
  ProxyActionCollect_2 = 'PROXY_ACTION_COLLECT_2',
  ProxyActionCollect_3 = 'PROXY_ACTION_COLLECT_3',
  ProxyActionCollect_4 = 'PROXY_ACTION_COLLECT_4',
  ProxyActionCollect_5 = 'PROXY_ACTION_COLLECT_5',
  ProxyActionCollect_6 = 'PROXY_ACTION_COLLECT_6',
  ProxyActionFollow_1 = 'PROXY_ACTION_FOLLOW_1',
  ProxyActionFollow_2 = 'PROXY_ACTION_FOLLOW_2',
  ProxyActionFollow_3 = 'PROXY_ACTION_FOLLOW_3',
  ProxyActionFollow_4 = 'PROXY_ACTION_FOLLOW_4',
  ProxyActionFollow_5 = 'PROXY_ACTION_FOLLOW_5',
  ProxyActionFollow_6 = 'PROXY_ACTION_FOLLOW_6',
  ProxyActionFollow_7 = 'PROXY_ACTION_FOLLOW_7',
  ProxyActionFollow_8 = 'PROXY_ACTION_FOLLOW_8',
  ProxyActionFollow_9 = 'PROXY_ACTION_FOLLOW_9',
  ProxyActionFollow_10 = 'PROXY_ACTION_FOLLOW_10',
  WithSig_1 = 'WITH_SIG_1',
  WithSig_2 = 'WITH_SIG_2',
  WithSig_3 = 'WITH_SIG_3',
  ZkRelayer_1 = 'ZK_RELAYER_1'
}

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult';
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars['TxHash']['output'];
  /** The tx id */
  txId: Scalars['TxId']['output'];
};

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']['input']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId']['input'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']['input']>;
  publicationId: Scalars['InternalPublicationId']['input'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime']['output'];
  handle: Scalars['Handle']['output'];
  id: Scalars['HandleClaimIdScalar']['output'];
  source: Scalars['String']['output'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The follow module enum */
  type: FollowModules;
};

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** The search term */
  query: Scalars['Search']['input'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']['input']>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime']['output'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId']['output'];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp']['output'];
  nonce: Scalars['Nonce']['output'];
  profileId: Scalars['ProfileId']['output'];
  wallet: Scalars['EthereumAddress']['output'];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']['input']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  /** The profile id */
  profileId: Scalars['ProfileId']['input'];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress']['input'];
  /** The signature */
  signature: Scalars['Signature']['input'];
};

export type SimpleCollectModuleParams = {
  /** The collect module limit */
  collectLimit?: InputMaybe<Scalars['String']['input']>;
  /** The timestamp that this collect module will expire */
  endTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  /** The collect module fee params */
  fee?: InputMaybe<ModuleFeeParams>;
  /** Collectible by followers only */
  followerOnly: Scalars['Boolean']['input'];
};

export type SimpleCollectModuleSettings = {
  __typename?: 'SimpleCollectModuleSettings';
  /** The maximum number of collects for this publication. 0 for no limit. */
  collectLimit?: Maybe<Scalars['String']['output']>;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The end timestamp after which collecting is impossible. 0 for no expiry. */
  endTimestamp?: Maybe<Scalars['DateTime']['output']>;
  /** The collect module fee params */
  fee?: Maybe<ModuleFee>;
  /** True if only followers of publisher may collect the post. */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']['input']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']['input']>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type Subscription = {
  __typename?: 'Subscription';
  newDataAvailabilityTransaction: DataAvailabilityTransactionUnion;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars['Boolean']['output'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']['output']>;
};

/** The social comment */
export type TagResult = {
  __typename?: 'TagResult';
  /** The tag */
  tag: Scalars['PublicationTag']['output'];
  /** The total amount of publication tagged */
  total: Scalars['Int']['output'];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean']['input'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['input'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['input'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress']['output'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime']['output'];
  /** Follower only */
  followerOnly: Scalars['Boolean']['output'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress']['output'];
  /** The collect module referral fee */
  referralFee: Scalars['Float']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean']['output'];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars['TxHash']['output'];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  byzantium: Scalars['Boolean']['output'];
  confirmations: Scalars['Int']['output'];
  contractAddress?: Maybe<Scalars['ContractAddress']['output']>;
  cumulativeGasUsed: Scalars['String']['output'];
  effectiveGasPrice: Scalars['String']['output'];
  from: Scalars['EthereumAddress']['output'];
  gasUsed: Scalars['String']['output'];
  logs: Array<Log>;
  logsBloom: Scalars['String']['output'];
  root?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['EthereumAddress']['output']>;
  transactionHash: Scalars['TxHash']['output'];
  transactionIndex: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce']['input'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId']['input'];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress']['input'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings';
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars['CollectModuleData']['output'];
  contractAddress: Scalars['ContractAddress']['output'];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress']['input'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars['FollowModuleData']['output'];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress']['input'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData']['input'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress']['output'];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['ReferenceModuleData']['output'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId']['input'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']['input']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce']['output'];
  peripheryOnChainSigNonce: Scalars['Nonce']['output'];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt']['input'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress']['output'];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  limit?: InputMaybe<Scalars['LimitScalar']['input']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId']['input'];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: 'WhoReactedResult';
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars['DateTime']['output'];
  /** The reaction id */
  reactionId: Scalars['ReactionId']['output'];
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean']['output'];
};

/** The worldcoin signal type */
export enum WorldcoinPhoneVerifyType {
  Orb = 'ORB',
  Phone = 'PHONE'
}

export type WorldcoinPhoneVerifyWebhookRequest = {
  nullifierHash: Scalars['String']['input'];
  signal: Scalars['EthereumAddress']['input'];
  signalType: WorldcoinPhoneVerifyType;
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

export type MediaFieldsFragment = { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } };

export type PublicationStatsFieldsFragment = { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number };

export type MetadataOutputFieldsFragment = { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null };

export type Erc20FieldsFragment = { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any };

export type PostFieldsFragment = { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type MirrorBaseFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentBaseFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentMirrorOfFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type TxReceiptFieldsFragment = { __typename?: 'TransactionReceipt', to?: any | null, from: any, contractAddress?: any | null, transactionIndex: number, root?: string | null, gasUsed: string, logsBloom: string, blockHash: string, transactionHash: any, blockNumber: number, confirmations: number, cumulativeGasUsed: string, effectiveGasPrice: string, byzantium: boolean, type: number, status?: number | null, logs: Array<{ __typename?: 'Log', blockNumber: number, blockHash: string, transactionIndex: number, removed: boolean, address: any, data: string, topics: Array<string>, transactionHash: any, logIndex: number }> };

export type WalletFieldsFragment = { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } } | null };

export type CommonPaginatedResultInfoFieldsFragment = { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null };

type FollowModuleFields_FeeFollowModuleSettings_Fragment = { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type FollowModuleFields_ProfileFollowModuleSettings_Fragment = { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_RevertFollowModuleSettings_Fragment = { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_UnknownFollowModuleSettings_Fragment = { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any };

export type FollowModuleFieldsFragment = FollowModuleFields_FeeFollowModuleSettings_Fragment | FollowModuleFields_ProfileFollowModuleSettings_Fragment | FollowModuleFields_RevertFollowModuleSettings_Fragment | FollowModuleFields_UnknownFollowModuleSettings_Fragment;

type CollectModuleFields_AaveFeeCollectModuleSettings_Fragment = { __typename: 'AaveFeeCollectModuleSettings' };

type CollectModuleFields_Erc4626FeeCollectModuleSettings_Fragment = { __typename: 'ERC4626FeeCollectModuleSettings' };

type CollectModuleFields_FeeCollectModuleSettings_Fragment = { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_FreeCollectModuleSettings_Fragment = { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any };

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_MultirecipientFeeCollectModuleSettings_Fragment = { __typename: 'MultirecipientFeeCollectModuleSettings' };

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename: 'RevertCollectModuleSettings', type: CollectModules };

type CollectModuleFields_SimpleCollectModuleSettings_Fragment = { __typename: 'SimpleCollectModuleSettings' };

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any };

export type CollectModuleFieldsFragment = CollectModuleFields_AaveFeeCollectModuleSettings_Fragment | CollectModuleFields_Erc4626FeeCollectModuleSettings_Fragment | CollectModuleFields_FeeCollectModuleSettings_Fragment | CollectModuleFields_FreeCollectModuleSettings_Fragment | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment | CollectModuleFields_MultirecipientFeeCollectModuleSettings_Fragment | CollectModuleFields_RevertCollectModuleSettings_Fragment | CollectModuleFields_SimpleCollectModuleSettings_Fragment | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment | CollectModuleFields_UnknownCollectModuleSettings_Fragment;

type ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment = { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number };

type ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment = { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any };

type ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment = { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any };

export type ReferenceModuleFieldsFragment = ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment | ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment | ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment;

export type Erc20OwnershipFieldsFragment = { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number };

export type EoaOwnershipFieldsFragment = { __typename?: 'EoaOwnershipOutput', address: any };

export type NftOwnershipFieldsFragment = { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null };

export type ProfileOwnershipFieldsFragment = { __typename?: 'ProfileOwnershipOutput', profileId: any };

export type FollowConditionFieldsFragment = { __typename?: 'FollowConditionOutput', profileId: any };

export type CollectConditionFieldsFragment = { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null };

export type AndConditionFieldsFragment = { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }> };

export type OrConditionFieldsFragment = { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }> };

export type AndConditionFieldsNoRecursiveFragment = { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> };

export type OrConditionFieldsNoRecursiveFragment = { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> };

export type SimpleConditionFieldsFragment = { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null };

export type BooleanConditionFieldsRecursiveFragment = { __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null };

export type AccessConditionFieldsFragment = { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null };

export type EncryptedMediaFieldsFragment = { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null };

export type EncryptedMediaSetFieldsFragment = { __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null };

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename: 'RelayError', reason: RelayErrorReasons } | { __typename: 'RelayerResult', txHash: any } };

export type ExplorePublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
}>;


export type ExplorePublicationsQuery = { __typename?: 'Query', explorePublications: { __typename?: 'ExplorePublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null } } };

export type DefaultProfileQueryVariables = Exact<{
  request: DefaultProfileRequest;
}>;


export type DefaultProfileQuery = { __typename?: 'Query', defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } } | null };

export type ProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } } | null };

export type PublicationsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
}>;


export type PublicationsQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, isGated: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, isFollowedByMe: boolean, isFollowing: boolean, followNftAddress?: any | null, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any } | { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any } | null, onChainIdentity: { __typename?: 'OnChainIdentity', proofOfHumanity: boolean, ens?: { __typename?: 'EnsOnChainIdentity', name?: any | null } | null, sybilDotOrg: { __typename?: 'SybilDotOrgIdentity', verified: boolean, source: { __typename?: 'SybilDotOrgIdentitySource', twitter: { __typename?: 'SybilDotOrgTwitterIdentity', handle?: string | null } } }, worldcoin: { __typename?: 'WorldcoinIdentity', isHuman: boolean } } }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }>, encryptionParams?: { __typename?: 'EncryptionParamsOutput', providerSpecificParams: { __typename?: 'ProviderSpecificParamsOutput', encryptionKey: any }, accessCondition: { __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null, and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', and?: { __typename?: 'AndConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, or?: { __typename?: 'OrConditionOutput', criteria: Array<{ __typename?: 'AccessConditionOutput', nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null, nft?: { __typename?: 'NftOwnershipOutput', contractAddress: any, chainID: any, contractType: ContractType, tokenIds?: Array<any> | null } | null, eoa?: { __typename?: 'EoaOwnershipOutput', address: any } | null, token?: { __typename?: 'Erc20OwnershipOutput', contractAddress: any, amount: string, chainID: any, condition: ScalarOperator, decimals: number } | null, profile?: { __typename?: 'ProfileOwnershipOutput', profileId: any } | null, follow?: { __typename?: 'FollowConditionOutput', profileId: any } | null, collect?: { __typename?: 'CollectConditionOutput', publicationId?: any | null, thisPublication?: boolean | null } | null }> } | null }, encryptedFields: { __typename?: 'EncryptedFieldsOutput', animation_url?: any | null, content?: any | null, external_url?: any | null, image?: any | null, media?: Array<{ __typename?: 'EncryptedMediaSet', original: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'EncryptedMedia', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }> | null } } | null }, collectModule: { __typename: 'AaveFeeCollectModuleSettings' } | { __typename: 'ERC4626FeeCollectModuleSettings' } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'MultirecipientFeeCollectModuleSettings' } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'SimpleCollectModuleSettings' } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null } } };

export type CreatePostTypedDataMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;


export type CreatePostTypedDataMutation = { __typename?: 'Mutation', createPostTypedData: { __typename?: 'CreatePostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreatePostEIP712TypedData', types: { __typename?: 'CreatePostEIP712TypedDataTypes', PostWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreatePostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, collectModule: any, collectModuleInitData: any, referenceModule: any, referenceModuleInitData: any } } } };

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export const MediaFieldsFragmentDoc = `
    fragment MediaFields on Media {
  url
  width
  height
  mimeType
}
    `;
export const FollowModuleFieldsFragmentDoc = `
    fragment FollowModuleFields on FollowModule {
  ... on FeeFollowModuleSettings {
    type
    amount {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
    recipient
  }
  ... on ProfileFollowModuleSettings {
    type
    contractAddress
  }
  ... on RevertFollowModuleSettings {
    type
    contractAddress
  }
  ... on UnknownFollowModuleSettings {
    type
    contractAddress
    followModuleReturnData
  }
}
    `;
export const ProfileFieldsFragmentDoc = `
    fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  isFollowedByMe
  isFollowing(who: null)
  followNftAddress
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
    canUseRelay
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ...FollowModuleFields
  }
  onChainIdentity {
    ens {
      name
    }
    proofOfHumanity
    sybilDotOrg {
      verified
      source {
        twitter {
          handle
        }
      }
    }
    worldcoin {
      isHuman
    }
  }
}
    `;
export const PublicationStatsFieldsFragmentDoc = `
    fragment PublicationStatsFields on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
export const NftOwnershipFieldsFragmentDoc = `
    fragment NftOwnershipFields on NftOwnershipOutput {
  contractAddress
  chainID
  contractType
  tokenIds
}
    `;
export const EoaOwnershipFieldsFragmentDoc = `
    fragment EoaOwnershipFields on EoaOwnershipOutput {
  address
}
    `;
export const Erc20OwnershipFieldsFragmentDoc = `
    fragment Erc20OwnershipFields on Erc20OwnershipOutput {
  contractAddress
  amount
  chainID
  condition
  decimals
}
    `;
export const ProfileOwnershipFieldsFragmentDoc = `
    fragment ProfileOwnershipFields on ProfileOwnershipOutput {
  profileId
}
    `;
export const FollowConditionFieldsFragmentDoc = `
    fragment FollowConditionFields on FollowConditionOutput {
  profileId
}
    `;
export const CollectConditionFieldsFragmentDoc = `
    fragment CollectConditionFields on CollectConditionOutput {
  publicationId
  thisPublication
}
    `;
export const SimpleConditionFieldsFragmentDoc = `
    fragment SimpleConditionFields on AccessConditionOutput {
  nft {
    ...NftOwnershipFields
  }
  eoa {
    ...EoaOwnershipFields
  }
  token {
    ...Erc20OwnershipFields
  }
  profile {
    ...ProfileOwnershipFields
  }
  follow {
    ...FollowConditionFields
  }
  collect {
    ...CollectConditionFields
  }
}
    `;
export const BooleanConditionFieldsRecursiveFragmentDoc = `
    fragment BooleanConditionFieldsRecursive on AccessConditionOutput {
  and {
    criteria {
      ...SimpleConditionFields
      and {
        criteria {
          ...SimpleConditionFields
        }
      }
      or {
        criteria {
          ...SimpleConditionFields
        }
      }
    }
  }
  or {
    criteria {
      ...SimpleConditionFields
      and {
        criteria {
          ...SimpleConditionFields
        }
      }
      or {
        criteria {
          ...SimpleConditionFields
        }
      }
    }
  }
}
    `;
export const AccessConditionFieldsFragmentDoc = `
    fragment AccessConditionFields on AccessConditionOutput {
  ...SimpleConditionFields
  ...BooleanConditionFieldsRecursive
}
    `;
export const EncryptedMediaFieldsFragmentDoc = `
    fragment EncryptedMediaFields on EncryptedMedia {
  url
  width
  height
  mimeType
}
    `;
export const EncryptedMediaSetFieldsFragmentDoc = `
    fragment EncryptedMediaSetFields on EncryptedMediaSet {
  original {
    ...EncryptedMediaFields
  }
  small {
    ...EncryptedMediaFields
  }
  medium {
    ...EncryptedMediaFields
  }
}
    `;
export const MetadataOutputFieldsFragmentDoc = `
    fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
  encryptionParams {
    providerSpecificParams {
      encryptionKey
    }
    accessCondition {
      ...AccessConditionFields
    }
    encryptedFields {
      animation_url
      content
      external_url
      image
      media {
        ...EncryptedMediaSetFields
      }
    }
  }
}
    `;
export const Erc20FieldsFragmentDoc = `
    fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}
    `;
export const CollectModuleFieldsFragmentDoc = `
    fragment CollectModuleFields on CollectModule {
  __typename
  ... on FreeCollectModuleSettings {
    type
    followerOnly
    contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on UnknownCollectModuleSettings {
    type
    contractAddress
    collectModuleReturnData
  }
}
    `;
export const ReferenceModuleFieldsFragmentDoc = `
    fragment ReferenceModuleFields on ReferenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
    contractAddress
  }
  ... on UnknownReferenceModuleSettings {
    type
    contractAddress
    referenceModuleReturnData
  }
  ... on DegreesOfSeparationReferenceModuleSettings {
    type
    contractAddress
    commentsRestricted
    mirrorsRestricted
    degreesOfSeparation
  }
}
    `;
export const MirrorBaseFieldsFragmentDoc = `
    fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  hasCollectedByMe
  isGated
}
    `;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
  isGated
}
    `;
export const CommentBaseFieldsFragmentDoc = `
    fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
  isGated
}
    `;
export const CommentMirrorOfFieldsFragmentDoc = `
    fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
    }
  }
}
    `;
export const CommentFieldsFragmentDoc = `
    fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentMirrorOfFields
        }
      }
    }
  }
}
    `;
export const MirrorFieldsFragmentDoc = `
    fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    `;
export const TxReceiptFieldsFragmentDoc = `
    fragment TxReceiptFields on TransactionReceipt {
  to
  from
  contractAddress
  transactionIndex
  root
  gasUsed
  logsBloom
  blockHash
  transactionHash
  blockNumber
  confirmations
  cumulativeGasUsed
  effectiveGasPrice
  byzantium
  type
  status
  logs {
    blockNumber
    blockHash
    transactionIndex
    removed
    address
    data
    topics
    transactionHash
    logIndex
  }
}
    `;
export const WalletFieldsFragmentDoc = `
    fragment WalletFields on Wallet {
  address
  defaultProfile {
    ...ProfileFields
  }
}
    `;
export const CommonPaginatedResultInfoFieldsFragmentDoc = `
    fragment CommonPaginatedResultInfoFields on PaginatedResultInfo {
  prev
  next
  totalCount
}
    `;
export const AndConditionFieldsFragmentDoc = `
    fragment AndConditionFields on AndConditionOutput {
  criteria {
    ...AccessConditionFields
  }
}
    `;
export const OrConditionFieldsFragmentDoc = `
    fragment OrConditionFields on OrConditionOutput {
  criteria {
    ...AccessConditionFields
  }
}
    `;
export const AndConditionFieldsNoRecursiveFragmentDoc = `
    fragment AndConditionFieldsNoRecursive on AndConditionOutput {
  criteria {
    ...SimpleConditionFields
  }
}
    `;
export const OrConditionFieldsNoRecursiveFragmentDoc = `
    fragment OrConditionFieldsNoRecursive on OrConditionOutput {
  criteria {
    ...SimpleConditionFields
  }
}
    `;
export const AuthenticateDocument = `
    mutation authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useAuthenticateMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>) =>
    useMutation<AuthenticateMutation, TError, AuthenticateMutationVariables, TContext>(
      ['authenticate'],
      (variables?: AuthenticateMutationVariables) => fetcher<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, variables)(),
      options
    );
export const ChallengeDocument = `
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;
export const useChallengeQuery = <
      TData = ChallengeQuery,
      TError = unknown
    >(
      variables: ChallengeQueryVariables,
      options?: UseQueryOptions<ChallengeQuery, TError, TData>
    ) =>
    useQuery<ChallengeQuery, TError, TData>(
      ['Challenge', variables],
      fetcher<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, variables),
      options
    );
export const CreateProfileDocument = `
    mutation createProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ... on RelayerResult {
      txHash
    }
    ... on RelayError {
      reason
    }
    __typename
  }
}
    `;
export const useCreateProfileMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateProfileMutation, TError, CreateProfileMutationVariables, TContext>) =>
    useMutation<CreateProfileMutation, TError, CreateProfileMutationVariables, TContext>(
      ['createProfile'],
      (variables?: CreateProfileMutationVariables) => fetcher<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, variables)(),
      options
    );
export const ExplorePublicationsDocument = `
    query ExplorePublications($request: ExplorePublicationRequest!) {
  explorePublications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${AccessConditionFieldsFragmentDoc}
${SimpleConditionFieldsFragmentDoc}
${NftOwnershipFieldsFragmentDoc}
${EoaOwnershipFieldsFragmentDoc}
${Erc20OwnershipFieldsFragmentDoc}
${ProfileOwnershipFieldsFragmentDoc}
${FollowConditionFieldsFragmentDoc}
${CollectConditionFieldsFragmentDoc}
${BooleanConditionFieldsRecursiveFragmentDoc}
${EncryptedMediaSetFieldsFragmentDoc}
${EncryptedMediaFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${Erc20FieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${CommentBaseFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}
${CommentMirrorOfFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
export const useExplorePublicationsQuery = <
      TData = ExplorePublicationsQuery,
      TError = unknown
    >(
      variables: ExplorePublicationsQueryVariables,
      options?: UseQueryOptions<ExplorePublicationsQuery, TError, TData>
    ) =>
    useQuery<ExplorePublicationsQuery, TError, TData>(
      ['ExplorePublications', variables],
      fetcher<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(ExplorePublicationsDocument, variables),
      options
    );
export const DefaultProfileDocument = `
    query defaultProfile($request: DefaultProfileRequest!) {
  defaultProfile(request: $request) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}
${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}`;
export const useDefaultProfileQuery = <
      TData = DefaultProfileQuery,
      TError = unknown
    >(
      variables: DefaultProfileQueryVariables,
      options?: UseQueryOptions<DefaultProfileQuery, TError, TData>
    ) =>
    useQuery<DefaultProfileQuery, TError, TData>(
      ['defaultProfile', variables],
      fetcher<DefaultProfileQuery, DefaultProfileQueryVariables>(DefaultProfileDocument, variables),
      options
    );
export const ProfileDocument = `
    query profile($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}
${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}`;
export const useProfileQuery = <
      TData = ProfileQuery,
      TError = unknown
    >(
      variables: ProfileQueryVariables,
      options?: UseQueryOptions<ProfileQuery, TError, TData>
    ) =>
    useQuery<ProfileQuery, TError, TData>(
      ['profile', variables],
      fetcher<ProfileQuery, ProfileQueryVariables>(ProfileDocument, variables),
      options
    );
export const PublicationsDocument = `
    query publications($request: PublicationsQueryRequest!) {
  publications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${AccessConditionFieldsFragmentDoc}
${SimpleConditionFieldsFragmentDoc}
${NftOwnershipFieldsFragmentDoc}
${EoaOwnershipFieldsFragmentDoc}
${Erc20OwnershipFieldsFragmentDoc}
${ProfileOwnershipFieldsFragmentDoc}
${FollowConditionFieldsFragmentDoc}
${CollectConditionFieldsFragmentDoc}
${BooleanConditionFieldsRecursiveFragmentDoc}
${EncryptedMediaSetFieldsFragmentDoc}
${EncryptedMediaFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${Erc20FieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${CommentBaseFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}
${CommentMirrorOfFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
export const usePublicationsQuery = <
      TData = PublicationsQuery,
      TError = unknown
    >(
      variables: PublicationsQueryVariables,
      options?: UseQueryOptions<PublicationsQuery, TError, TData>
    ) =>
    useQuery<PublicationsQuery, TError, TData>(
      ['publications', variables],
      fetcher<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, variables),
      options
    );
export const CreatePostTypedDataDocument = `
    mutation createPostTypedData($request: CreatePublicPostRequest!) {
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
    `;
export const useCreatePostTypedDataMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePostTypedDataMutation, TError, CreatePostTypedDataMutationVariables, TContext>) =>
    useMutation<CreatePostTypedDataMutation, TError, CreatePostTypedDataMutationVariables, TContext>(
      ['createPostTypedData'],
      (variables?: CreatePostTypedDataMutationVariables) => fetcher<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>(CreatePostTypedDataDocument, variables)(),
      options
    );
export const RefreshDocument = `
    mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export const useRefreshMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RefreshMutation, TError, RefreshMutationVariables, TContext>) =>
    useMutation<RefreshMutation, TError, RefreshMutationVariables, TContext>(
      ['Refresh'],
      (variables?: RefreshMutationVariables) => fetcher<RefreshMutation, RefreshMutationVariables>(RefreshDocument, variables)(),
      options
    );

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "BroadcastDataAvailabilityUnion": [
      "CreateDataAvailabilityPublicationResult",
      "RelayError"
    ],
    "CollectModule": [
      "AaveFeeCollectModuleSettings",
      "ERC4626FeeCollectModuleSettings",
      "FeeCollectModuleSettings",
      "FreeCollectModuleSettings",
      "LimitedFeeCollectModuleSettings",
      "LimitedTimedFeeCollectModuleSettings",
      "MultirecipientFeeCollectModuleSettings",
      "RevertCollectModuleSettings",
      "SimpleCollectModuleSettings",
      "TimedFeeCollectModuleSettings",
      "UnknownCollectModuleSettings"
    ],
    "DataAvailabilityTransactionUnion": [
      "DataAvailabilityComment",
      "DataAvailabilityMirror",
      "DataAvailabilityPost"
    ],
    "DataAvailabilityVerificationStatusUnion": [
      "DataAvailabilityVerificationStatusFailure",
      "DataAvailabilityVerificationStatusSuccess"
    ],
    "FeedItemRoot": [
      "Comment",
      "Post"
    ],
    "FollowModule": [
      "FeeFollowModuleSettings",
      "ProfileFollowModuleSettings",
      "RevertFollowModuleSettings",
      "UnknownFollowModuleSettings"
    ],
    "MainPostReference": [
      "Mirror",
      "Post"
    ],
    "MentionPublication": [
      "Comment",
      "Post"
    ],
    "MirrorablePublication": [
      "Comment",
      "Post"
    ],
    "Notification": [
      "NewCollectNotification",
      "NewCommentNotification",
      "NewFollowerNotification",
      "NewMentionNotification",
      "NewMirrorNotification",
      "NewReactionNotification"
    ],
    "ProfileMedia": [
      "MediaSet",
      "NftImage"
    ],
    "ProxyActionStatusResultUnion": [
      "ProxyActionError",
      "ProxyActionQueued",
      "ProxyActionStatusResult"
    ],
    "Publication": [
      "Comment",
      "Mirror",
      "Post"
    ],
    "PublicationForSale": [
      "Comment",
      "Post"
    ],
    "PublicationSearchResultItem": [
      "Comment",
      "Post"
    ],
    "ReferenceModule": [
      "DegreesOfSeparationReferenceModuleSettings",
      "FollowOnlyReferenceModuleSettings",
      "UnknownReferenceModuleSettings"
    ],
    "RelayDataAvailabilityResult": [
      "CreateDataAvailabilityPublicationResult",
      "RelayError"
    ],
    "RelayResult": [
      "RelayError",
      "RelayerResult"
    ],
    "SearchResult": [
      "ProfileSearchResult",
      "PublicationSearchResult"
    ],
    "TransactionResult": [
      "TransactionError",
      "TransactionIndexedResult"
    ]
  }
};
      export default result;
    