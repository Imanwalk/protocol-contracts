/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ERC20CustodyInterface extends utils.Interface {
  functions: {
    "TSSAddress()": FunctionFragment;
    "TSSAddressUpdater()": FunctionFragment;
    "deposit(bytes,address,uint256,bytes)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pauserAddress()": FunctionFragment;
    "renounceTSSAddressUpdater()": FunctionFragment;
    "unpause()": FunctionFragment;
    "unwhitelist(address)": FunctionFragment;
    "updatePauserAddress(address)": FunctionFragment;
    "updateTSSAddress(address)": FunctionFragment;
    "updateZetaFee(uint256)": FunctionFragment;
    "whitelist(address)": FunctionFragment;
    "whitelisted(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
    "zeta()": FunctionFragment;
    "zetaFee()": FunctionFragment;
    "zetaMaxFee()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TSSAddress"
      | "TSSAddressUpdater"
      | "deposit"
      | "pause"
      | "paused"
      | "pauserAddress"
      | "renounceTSSAddressUpdater"
      | "unpause"
      | "unwhitelist"
      | "updatePauserAddress"
      | "updateTSSAddress"
      | "updateZetaFee"
      | "whitelist"
      | "whitelisted"
      | "withdraw"
      | "zeta"
      | "zetaFee"
      | "zetaMaxFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TSSAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TSSAddressUpdater",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauserAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceTSSAddressUpdater",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unwhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePauserAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTSSAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateZetaFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelisted",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "zeta", values?: undefined): string;
  encodeFunctionData(functionFragment: "zetaFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zetaMaxFee",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "TSSAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TSSAddressUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceTSSAddressUpdater",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePauserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTSSAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateZetaFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeta", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zetaFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zetaMaxFee", data: BytesLike): Result;

  events: {
    "Deposited(bytes,address,uint256,bytes)": EventFragment;
    "Paused(address)": EventFragment;
    "PauserAddressUpdated(address,address)": EventFragment;
    "RenouncedTSSUpdater(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Unwhitelisted(address)": EventFragment;
    "UpdatedTSSAddress(address)": EventFragment;
    "UpdatedZetaFee(uint256)": EventFragment;
    "Whitelisted(address)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAddressUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RenouncedTSSUpdater"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unwhitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedTSSAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedZetaFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Whitelisted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface DepositedEventObject {
  recipient: string;
  asset: string;
  amount: BigNumber;
  message: string;
}
export type DepositedEvent = TypedEvent<
  [string, string, BigNumber, string],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PauserAddressUpdatedEventObject {
  callerAddress: string;
  newTssAddress: string;
}
export type PauserAddressUpdatedEvent = TypedEvent<
  [string, string],
  PauserAddressUpdatedEventObject
>;

export type PauserAddressUpdatedEventFilter =
  TypedEventFilter<PauserAddressUpdatedEvent>;

export interface RenouncedTSSUpdaterEventObject {
  TSSAddressUpdater_: string;
}
export type RenouncedTSSUpdaterEvent = TypedEvent<
  [string],
  RenouncedTSSUpdaterEventObject
>;

export type RenouncedTSSUpdaterEventFilter =
  TypedEventFilter<RenouncedTSSUpdaterEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UnwhitelistedEventObject {
  asset: string;
}
export type UnwhitelistedEvent = TypedEvent<[string], UnwhitelistedEventObject>;

export type UnwhitelistedEventFilter = TypedEventFilter<UnwhitelistedEvent>;

export interface UpdatedTSSAddressEventObject {
  TSSAddress_: string;
}
export type UpdatedTSSAddressEvent = TypedEvent<
  [string],
  UpdatedTSSAddressEventObject
>;

export type UpdatedTSSAddressEventFilter =
  TypedEventFilter<UpdatedTSSAddressEvent>;

export interface UpdatedZetaFeeEventObject {
  zetaFee_: BigNumber;
}
export type UpdatedZetaFeeEvent = TypedEvent<
  [BigNumber],
  UpdatedZetaFeeEventObject
>;

export type UpdatedZetaFeeEventFilter = TypedEventFilter<UpdatedZetaFeeEvent>;

export interface WhitelistedEventObject {
  asset: string;
}
export type WhitelistedEvent = TypedEvent<[string], WhitelistedEventObject>;

export type WhitelistedEventFilter = TypedEventFilter<WhitelistedEvent>;

export interface WithdrawnEventObject {
  recipient: string;
  asset: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface ERC20Custody extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20CustodyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    TSSAddress(overrides?: CallOverrides): Promise<[string]>;

    TSSAddressUpdater(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      recipient: PromiseOrValue<BytesLike>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pauserAddress(overrides?: CallOverrides): Promise<[string]>;

    renounceTSSAddressUpdater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unwhitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updatePauserAddress(
      pauserAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTSSAddress(
      TSSAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateZetaFee(
      zetaFee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    zeta(overrides?: CallOverrides): Promise<[string]>;

    zetaFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    zetaMaxFee(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  TSSAddress(overrides?: CallOverrides): Promise<string>;

  TSSAddressUpdater(overrides?: CallOverrides): Promise<string>;

  deposit(
    recipient: PromiseOrValue<BytesLike>,
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pauserAddress(overrides?: CallOverrides): Promise<string>;

  renounceTSSAddressUpdater(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unwhitelist(
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updatePauserAddress(
    pauserAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTSSAddress(
    TSSAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateZetaFee(
    zetaFee_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelist(
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelisted(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    recipient: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  zeta(overrides?: CallOverrides): Promise<string>;

  zetaFee(overrides?: CallOverrides): Promise<BigNumber>;

  zetaMaxFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    TSSAddress(overrides?: CallOverrides): Promise<string>;

    TSSAddressUpdater(overrides?: CallOverrides): Promise<string>;

    deposit(
      recipient: PromiseOrValue<BytesLike>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pauserAddress(overrides?: CallOverrides): Promise<string>;

    renounceTSSAddressUpdater(overrides?: CallOverrides): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    unwhitelist(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePauserAddress(
      pauserAddress_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTSSAddress(
      TSSAddress_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateZetaFee(
      zetaFee_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelist(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    zeta(overrides?: CallOverrides): Promise<string>;

    zetaFee(overrides?: CallOverrides): Promise<BigNumber>;

    zetaMaxFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Deposited(bytes,address,uint256,bytes)"(
      recipient?: null,
      asset?: PromiseOrValue<string> | null,
      amount?: null,
      message?: null
    ): DepositedEventFilter;
    Deposited(
      recipient?: null,
      asset?: PromiseOrValue<string> | null,
      amount?: null,
      message?: null
    ): DepositedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PauserAddressUpdated(address,address)"(
      callerAddress?: null,
      newTssAddress?: null
    ): PauserAddressUpdatedEventFilter;
    PauserAddressUpdated(
      callerAddress?: null,
      newTssAddress?: null
    ): PauserAddressUpdatedEventFilter;

    "RenouncedTSSUpdater(address)"(
      TSSAddressUpdater_?: null
    ): RenouncedTSSUpdaterEventFilter;
    RenouncedTSSUpdater(
      TSSAddressUpdater_?: null
    ): RenouncedTSSUpdaterEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Unwhitelisted(address)"(
      asset?: PromiseOrValue<string> | null
    ): UnwhitelistedEventFilter;
    Unwhitelisted(
      asset?: PromiseOrValue<string> | null
    ): UnwhitelistedEventFilter;

    "UpdatedTSSAddress(address)"(
      TSSAddress_?: null
    ): UpdatedTSSAddressEventFilter;
    UpdatedTSSAddress(TSSAddress_?: null): UpdatedTSSAddressEventFilter;

    "UpdatedZetaFee(uint256)"(zetaFee_?: null): UpdatedZetaFeeEventFilter;
    UpdatedZetaFee(zetaFee_?: null): UpdatedZetaFeeEventFilter;

    "Whitelisted(address)"(
      asset?: PromiseOrValue<string> | null
    ): WhitelistedEventFilter;
    Whitelisted(asset?: PromiseOrValue<string> | null): WhitelistedEventFilter;

    "Withdrawn(address,address,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      recipient?: PromiseOrValue<string> | null,
      asset?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    TSSAddress(overrides?: CallOverrides): Promise<BigNumber>;

    TSSAddressUpdater(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      recipient: PromiseOrValue<BytesLike>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pauserAddress(overrides?: CallOverrides): Promise<BigNumber>;

    renounceTSSAddressUpdater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unwhitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updatePauserAddress(
      pauserAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTSSAddress(
      TSSAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateZetaFee(
      zetaFee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    zeta(overrides?: CallOverrides): Promise<BigNumber>;

    zetaFee(overrides?: CallOverrides): Promise<BigNumber>;

    zetaMaxFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    TSSAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TSSAddressUpdater(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      recipient: PromiseOrValue<BytesLike>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauserAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceTSSAddressUpdater(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unwhitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updatePauserAddress(
      pauserAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTSSAddress(
      TSSAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateZetaFee(
      zetaFee_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelist(
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      recipient: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    zeta(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zetaFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zetaMaxFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
