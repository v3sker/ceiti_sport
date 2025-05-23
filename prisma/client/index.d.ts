
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model athlete
 * 
 */
export type athlete = $Result.DefaultSelection<Prisma.$athletePayload>
/**
 * Model athlete_competition
 * 
 */
export type athlete_competition = $Result.DefaultSelection<Prisma.$athlete_competitionPayload>
/**
 * Model athlete_sport
 * 
 */
export type athlete_sport = $Result.DefaultSelection<Prisma.$athlete_sportPayload>
/**
 * Model competition
 * 
 */
export type competition = $Result.DefaultSelection<Prisma.$competitionPayload>
/**
 * Model sport
 * 
 */
export type sport = $Result.DefaultSelection<Prisma.$sportPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const athlete_competition_placement: {
  I: 'I',
  II: 'II',
  III: 'III',
  IV: 'IV'
};

export type athlete_competition_placement = (typeof athlete_competition_placement)[keyof typeof athlete_competition_placement]


export const athlete_gender_enum: {
  M: 'M',
  F: 'F'
};

export type athlete_gender_enum = (typeof athlete_gender_enum)[keyof typeof athlete_gender_enum]


export const competition_level: {
  REPUBLIC: 'REPUBLIC',
  NATIONAL: 'NATIONAL',
  INTERNATIONAL: 'INTERNATIONAL'
};

export type competition_level = (typeof competition_level)[keyof typeof competition_level]


export const users_role: {
  GUEST: 'GUEST',
  USER: 'USER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  SUPERUSER: 'SUPERUSER'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type athlete_competition_placement = $Enums.athlete_competition_placement

export const athlete_competition_placement: typeof $Enums.athlete_competition_placement

export type athlete_gender_enum = $Enums.athlete_gender_enum

export const athlete_gender_enum: typeof $Enums.athlete_gender_enum

export type competition_level = $Enums.competition_level

export const competition_level: typeof $Enums.competition_level

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Athletes
 * const athletes = await prisma.athlete.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Athletes
   * const athletes = await prisma.athlete.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.athlete`: Exposes CRUD operations for the **athlete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athletes
    * const athletes = await prisma.athlete.findMany()
    * ```
    */
  get athlete(): Prisma.athleteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athlete_competition`: Exposes CRUD operations for the **athlete_competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athlete_competitions
    * const athlete_competitions = await prisma.athlete_competition.findMany()
    * ```
    */
  get athlete_competition(): Prisma.athlete_competitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athlete_sport`: Exposes CRUD operations for the **athlete_sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athlete_sports
    * const athlete_sports = await prisma.athlete_sport.findMany()
    * ```
    */
  get athlete_sport(): Prisma.athlete_sportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.competitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sport`: Exposes CRUD operations for the **sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.sportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    athlete: 'athlete',
    athlete_competition: 'athlete_competition',
    athlete_sport: 'athlete_sport',
    competition: 'competition',
    sport: 'sport',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "athlete" | "athlete_competition" | "athlete_sport" | "competition" | "sport" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      athlete: {
        payload: Prisma.$athletePayload<ExtArgs>
        fields: Prisma.athleteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.athleteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.athleteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          findFirst: {
            args: Prisma.athleteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.athleteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          findMany: {
            args: Prisma.athleteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>[]
          }
          create: {
            args: Prisma.athleteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          createMany: {
            args: Prisma.athleteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.athleteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>[]
          }
          delete: {
            args: Prisma.athleteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          update: {
            args: Prisma.athleteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          deleteMany: {
            args: Prisma.athleteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.athleteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.athleteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>[]
          }
          upsert: {
            args: Prisma.athleteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athletePayload>
          }
          aggregate: {
            args: Prisma.AthleteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthlete>
          }
          groupBy: {
            args: Prisma.athleteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthleteGroupByOutputType>[]
          }
          count: {
            args: Prisma.athleteCountArgs<ExtArgs>
            result: $Utils.Optional<AthleteCountAggregateOutputType> | number
          }
        }
      }
      athlete_competition: {
        payload: Prisma.$athlete_competitionPayload<ExtArgs>
        fields: Prisma.athlete_competitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.athlete_competitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.athlete_competitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          findFirst: {
            args: Prisma.athlete_competitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.athlete_competitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          findMany: {
            args: Prisma.athlete_competitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>[]
          }
          create: {
            args: Prisma.athlete_competitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          createMany: {
            args: Prisma.athlete_competitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.athlete_competitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>[]
          }
          delete: {
            args: Prisma.athlete_competitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          update: {
            args: Prisma.athlete_competitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          deleteMany: {
            args: Prisma.athlete_competitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.athlete_competitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.athlete_competitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>[]
          }
          upsert: {
            args: Prisma.athlete_competitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_competitionPayload>
          }
          aggregate: {
            args: Prisma.Athlete_competitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthlete_competition>
          }
          groupBy: {
            args: Prisma.athlete_competitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Athlete_competitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.athlete_competitionCountArgs<ExtArgs>
            result: $Utils.Optional<Athlete_competitionCountAggregateOutputType> | number
          }
        }
      }
      athlete_sport: {
        payload: Prisma.$athlete_sportPayload<ExtArgs>
        fields: Prisma.athlete_sportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.athlete_sportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.athlete_sportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          findFirst: {
            args: Prisma.athlete_sportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.athlete_sportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          findMany: {
            args: Prisma.athlete_sportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>[]
          }
          create: {
            args: Prisma.athlete_sportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          createMany: {
            args: Prisma.athlete_sportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.athlete_sportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>[]
          }
          delete: {
            args: Prisma.athlete_sportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          update: {
            args: Prisma.athlete_sportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          deleteMany: {
            args: Prisma.athlete_sportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.athlete_sportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.athlete_sportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>[]
          }
          upsert: {
            args: Prisma.athlete_sportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$athlete_sportPayload>
          }
          aggregate: {
            args: Prisma.Athlete_sportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthlete_sport>
          }
          groupBy: {
            args: Prisma.athlete_sportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Athlete_sportGroupByOutputType>[]
          }
          count: {
            args: Prisma.athlete_sportCountArgs<ExtArgs>
            result: $Utils.Optional<Athlete_sportCountAggregateOutputType> | number
          }
        }
      }
      competition: {
        payload: Prisma.$competitionPayload<ExtArgs>
        fields: Prisma.competitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findFirst: {
            args: Prisma.competitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findMany: {
            args: Prisma.competitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          create: {
            args: Prisma.competitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          createMany: {
            args: Prisma.competitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.competitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          delete: {
            args: Prisma.competitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          update: {
            args: Prisma.competitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          deleteMany: {
            args: Prisma.competitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.competitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          upsert: {
            args: Prisma.competitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.competitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.competitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      sport: {
        payload: Prisma.$sportPayload<ExtArgs>
        fields: Prisma.sportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          findFirst: {
            args: Prisma.sportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          findMany: {
            args: Prisma.sportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>[]
          }
          create: {
            args: Prisma.sportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          createMany: {
            args: Prisma.sportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>[]
          }
          delete: {
            args: Prisma.sportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          update: {
            args: Prisma.sportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          deleteMany: {
            args: Prisma.sportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>[]
          }
          upsert: {
            args: Prisma.sportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.sportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.sportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    athlete?: athleteOmit
    athlete_competition?: athlete_competitionOmit
    athlete_sport?: athlete_sportOmit
    competition?: competitionOmit
    sport?: sportOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AthleteCountOutputType
   */

  export type AthleteCountOutputType = {
    athlete_competition: number
    athlete_sport: number
  }

  export type AthleteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_competition?: boolean | AthleteCountOutputTypeCountAthlete_competitionArgs
    athlete_sport?: boolean | AthleteCountOutputTypeCountAthlete_sportArgs
  }

  // Custom InputTypes
  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteCountOutputType
     */
    select?: AthleteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountAthlete_competitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_competitionWhereInput
  }

  /**
   * AthleteCountOutputType without action
   */
  export type AthleteCountOutputTypeCountAthlete_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_sportWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    athlete_competition: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_competition?: boolean | CompetitionCountOutputTypeCountAthlete_competitionArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountAthlete_competitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_competitionWhereInput
  }


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    athlete_sport: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_sport?: boolean | SportCountOutputTypeCountAthlete_sportArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountAthlete_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_sportWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    athlete_athlete_created_byTousers: number
    athlete_athlete_updated_byTousers: number
    athlete_competition_athlete_competition_created_byTousers: number
    athlete_competition_athlete_competition_updated_byTousers: number
    athlete_sport_athlete_sport_created_byTousers: number
    athlete_sport_athlete_sport_updated_byTousers: number
    competition_competition_created_byTousers: number
    competition_competition_updated_byTousers: number
    sport_sport_created_byTousers: number
    sport_sport_updated_byTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_athlete_created_byTousers?: boolean | UsersCountOutputTypeCountAthlete_athlete_created_byTousersArgs
    athlete_athlete_updated_byTousers?: boolean | UsersCountOutputTypeCountAthlete_athlete_updated_byTousersArgs
    athlete_competition_athlete_competition_created_byTousers?: boolean | UsersCountOutputTypeCountAthlete_competition_athlete_competition_created_byTousersArgs
    athlete_competition_athlete_competition_updated_byTousers?: boolean | UsersCountOutputTypeCountAthlete_competition_athlete_competition_updated_byTousersArgs
    athlete_sport_athlete_sport_created_byTousers?: boolean | UsersCountOutputTypeCountAthlete_sport_athlete_sport_created_byTousersArgs
    athlete_sport_athlete_sport_updated_byTousers?: boolean | UsersCountOutputTypeCountAthlete_sport_athlete_sport_updated_byTousersArgs
    competition_competition_created_byTousers?: boolean | UsersCountOutputTypeCountCompetition_competition_created_byTousersArgs
    competition_competition_updated_byTousers?: boolean | UsersCountOutputTypeCountCompetition_competition_updated_byTousersArgs
    sport_sport_created_byTousers?: boolean | UsersCountOutputTypeCountSport_sport_created_byTousersArgs
    sport_sport_updated_byTousers?: boolean | UsersCountOutputTypeCountSport_sport_updated_byTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_athlete_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athleteWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_athlete_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athleteWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_competition_athlete_competition_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_competitionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_competitionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_sport_athlete_sport_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_sportWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAthlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_sportWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCompetition_competition_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competitionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCompetition_competition_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competitionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSport_sport_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sportWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSport_sport_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model athlete
   */

  export type AggregateAthlete = {
    _count: AthleteCountAggregateOutputType | null
    _avg: AthleteAvgAggregateOutputType | null
    _sum: AthleteSumAggregateOutputType | null
    _min: AthleteMinAggregateOutputType | null
    _max: AthleteMaxAggregateOutputType | null
  }

  export type AthleteAvgAggregateOutputType = {
    id: number | null
    height: Decimal | null
    weight: Decimal | null
    created_by: number | null
    updated_by: number | null
  }

  export type AthleteSumAggregateOutputType = {
    id: number | null
    height: Decimal | null
    weight: Decimal | null
    created_by: number | null
    updated_by: number | null
  }

  export type AthleteMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    gender: $Enums.athlete_gender_enum | null
    height: Decimal | null
    weight: Decimal | null
    birthdate: Date | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type AthleteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    gender: $Enums.athlete_gender_enum | null
    height: Decimal | null
    weight: Decimal | null
    birthdate: Date | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type AthleteCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    gender: number
    height: number
    weight: number
    birthdate: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type AthleteAvgAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    created_by?: true
    updated_by?: true
  }

  export type AthleteSumAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    created_by?: true
    updated_by?: true
  }

  export type AthleteMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    gender?: true
    height?: true
    weight?: true
    birthdate?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type AthleteMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    gender?: true
    height?: true
    weight?: true
    birthdate?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type AthleteCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    gender?: true
    height?: true
    weight?: true
    birthdate?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type AthleteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athlete to aggregate.
     */
    where?: athleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: athleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned athletes
    **/
    _count?: true | AthleteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AthleteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AthleteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthleteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthleteMaxAggregateInputType
  }

  export type GetAthleteAggregateType<T extends AthleteAggregateArgs> = {
        [P in keyof T & keyof AggregateAthlete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthlete[P]>
      : GetScalarType<T[P], AggregateAthlete[P]>
  }




  export type athleteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athleteWhereInput
    orderBy?: athleteOrderByWithAggregationInput | athleteOrderByWithAggregationInput[]
    by: AthleteScalarFieldEnum[] | AthleteScalarFieldEnum
    having?: athleteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthleteCountAggregateInputType | true
    _avg?: AthleteAvgAggregateInputType
    _sum?: AthleteSumAggregateInputType
    _min?: AthleteMinAggregateInputType
    _max?: AthleteMaxAggregateInputType
  }

  export type AthleteGroupByOutputType = {
    id: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height: Decimal | null
    weight: Decimal | null
    birthdate: Date | null
    created_at: Date | null
    created_by: number
    updated_at: Date | null
    updated_by: number
    _count: AthleteCountAggregateOutputType | null
    _avg: AthleteAvgAggregateOutputType | null
    _sum: AthleteSumAggregateOutputType | null
    _min: AthleteMinAggregateOutputType | null
    _max: AthleteMaxAggregateOutputType | null
  }

  type GetAthleteGroupByPayload<T extends athleteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthleteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthleteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthleteGroupByOutputType[P]>
            : GetScalarType<T[P], AthleteGroupByOutputType[P]>
        }
      >
    >


  export type athleteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    birthdate?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    athlete_competition?: boolean | athlete$athlete_competitionArgs<ExtArgs>
    athlete_sport?: boolean | athlete$athlete_sportArgs<ExtArgs>
    _count?: boolean | AthleteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type athleteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    birthdate?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type athleteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    birthdate?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete"]>

  export type athleteSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    birthdate?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type athleteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "gender" | "height" | "weight" | "birthdate" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["athlete"]>
  export type athleteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    athlete_competition?: boolean | athlete$athlete_competitionArgs<ExtArgs>
    athlete_sport?: boolean | athlete$athlete_sportArgs<ExtArgs>
    _count?: boolean | AthleteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type athleteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type athleteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_athlete_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $athletePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "athlete"
    objects: {
      users_athlete_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_athlete_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      athlete_competition: Prisma.$athlete_competitionPayload<ExtArgs>[]
      athlete_sport: Prisma.$athlete_sportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      gender: $Enums.athlete_gender_enum
      height: Prisma.Decimal | null
      weight: Prisma.Decimal | null
      birthdate: Date | null
      created_at: Date | null
      created_by: number
      updated_at: Date | null
      updated_by: number
    }, ExtArgs["result"]["athlete"]>
    composites: {}
  }

  type athleteGetPayload<S extends boolean | null | undefined | athleteDefaultArgs> = $Result.GetResult<Prisma.$athletePayload, S>

  type athleteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<athleteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthleteCountAggregateInputType | true
    }

  export interface athleteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['athlete'], meta: { name: 'athlete' } }
    /**
     * Find zero or one Athlete that matches the filter.
     * @param {athleteFindUniqueArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends athleteFindUniqueArgs>(args: SelectSubset<T, athleteFindUniqueArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Athlete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {athleteFindUniqueOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends athleteFindUniqueOrThrowArgs>(args: SelectSubset<T, athleteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteFindFirstArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends athleteFindFirstArgs>(args?: SelectSubset<T, athleteFindFirstArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteFindFirstOrThrowArgs} args - Arguments to find a Athlete
     * @example
     * // Get one Athlete
     * const athlete = await prisma.athlete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends athleteFindFirstOrThrowArgs>(args?: SelectSubset<T, athleteFindFirstOrThrowArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athletes
     * const athletes = await prisma.athlete.findMany()
     * 
     * // Get first 10 Athletes
     * const athletes = await prisma.athlete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athleteWithIdOnly = await prisma.athlete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends athleteFindManyArgs>(args?: SelectSubset<T, athleteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Athlete.
     * @param {athleteCreateArgs} args - Arguments to create a Athlete.
     * @example
     * // Create one Athlete
     * const Athlete = await prisma.athlete.create({
     *   data: {
     *     // ... data to create a Athlete
     *   }
     * })
     * 
     */
    create<T extends athleteCreateArgs>(args: SelectSubset<T, athleteCreateArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Athletes.
     * @param {athleteCreateManyArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends athleteCreateManyArgs>(args?: SelectSubset<T, athleteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athletes and returns the data saved in the database.
     * @param {athleteCreateManyAndReturnArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athlete = await prisma.athlete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends athleteCreateManyAndReturnArgs>(args?: SelectSubset<T, athleteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Athlete.
     * @param {athleteDeleteArgs} args - Arguments to delete one Athlete.
     * @example
     * // Delete one Athlete
     * const Athlete = await prisma.athlete.delete({
     *   where: {
     *     // ... filter to delete one Athlete
     *   }
     * })
     * 
     */
    delete<T extends athleteDeleteArgs>(args: SelectSubset<T, athleteDeleteArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Athlete.
     * @param {athleteUpdateArgs} args - Arguments to update one Athlete.
     * @example
     * // Update one Athlete
     * const athlete = await prisma.athlete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends athleteUpdateArgs>(args: SelectSubset<T, athleteUpdateArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Athletes.
     * @param {athleteDeleteManyArgs} args - Arguments to filter Athletes to delete.
     * @example
     * // Delete a few Athletes
     * const { count } = await prisma.athlete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends athleteDeleteManyArgs>(args?: SelectSubset<T, athleteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends athleteUpdateManyArgs>(args: SelectSubset<T, athleteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes and returns the data updated in the database.
     * @param {athleteUpdateManyAndReturnArgs} args - Arguments to update many Athletes.
     * @example
     * // Update many Athletes
     * const athlete = await prisma.athlete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athletes and only return the `id`
     * const athleteWithIdOnly = await prisma.athlete.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends athleteUpdateManyAndReturnArgs>(args: SelectSubset<T, athleteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Athlete.
     * @param {athleteUpsertArgs} args - Arguments to update or create a Athlete.
     * @example
     * // Update or create a Athlete
     * const athlete = await prisma.athlete.upsert({
     *   create: {
     *     // ... data to create a Athlete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athlete we want to update
     *   }
     * })
     */
    upsert<T extends athleteUpsertArgs>(args: SelectSubset<T, athleteUpsertArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteCountArgs} args - Arguments to filter Athletes to count.
     * @example
     * // Count the number of Athletes
     * const count = await prisma.athlete.count({
     *   where: {
     *     // ... the filter for the Athletes we want to count
     *   }
     * })
    **/
    count<T extends athleteCountArgs>(
      args?: Subset<T, athleteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthleteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AthleteAggregateArgs>(args: Subset<T, AthleteAggregateArgs>): Prisma.PrismaPromise<GetAthleteAggregateType<T>>

    /**
     * Group by Athlete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athleteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends athleteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: athleteGroupByArgs['orderBy'] }
        : { orderBy?: athleteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, athleteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthleteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the athlete model
   */
  readonly fields: athleteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for athlete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__athleteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_athlete_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_athlete_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    athlete_competition<T extends athlete$athlete_competitionArgs<ExtArgs> = {}>(args?: Subset<T, athlete$athlete_competitionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_sport<T extends athlete$athlete_sportArgs<ExtArgs> = {}>(args?: Subset<T, athlete$athlete_sportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the athlete model
   */
  interface athleteFieldRefs {
    readonly id: FieldRef<"athlete", 'Int'>
    readonly name: FieldRef<"athlete", 'String'>
    readonly surname: FieldRef<"athlete", 'String'>
    readonly gender: FieldRef<"athlete", 'athlete_gender_enum'>
    readonly height: FieldRef<"athlete", 'Decimal'>
    readonly weight: FieldRef<"athlete", 'Decimal'>
    readonly birthdate: FieldRef<"athlete", 'DateTime'>
    readonly created_at: FieldRef<"athlete", 'DateTime'>
    readonly created_by: FieldRef<"athlete", 'Int'>
    readonly updated_at: FieldRef<"athlete", 'DateTime'>
    readonly updated_by: FieldRef<"athlete", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * athlete findUnique
   */
  export type athleteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter, which athlete to fetch.
     */
    where: athleteWhereUniqueInput
  }

  /**
   * athlete findUniqueOrThrow
   */
  export type athleteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter, which athlete to fetch.
     */
    where: athleteWhereUniqueInput
  }

  /**
   * athlete findFirst
   */
  export type athleteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter, which athlete to fetch.
     */
    where?: athleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athletes.
     */
    cursor?: athleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * athlete findFirstOrThrow
   */
  export type athleteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter, which athlete to fetch.
     */
    where?: athleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athletes.
     */
    cursor?: athleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athletes.
     */
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * athlete findMany
   */
  export type athleteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter, which athletes to fetch.
     */
    where?: athleteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athletes to fetch.
     */
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing athletes.
     */
    cursor?: athleteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athletes.
     */
    skip?: number
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * athlete create
   */
  export type athleteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * The data needed to create a athlete.
     */
    data: XOR<athleteCreateInput, athleteUncheckedCreateInput>
  }

  /**
   * athlete createMany
   */
  export type athleteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many athletes.
     */
    data: athleteCreateManyInput | athleteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * athlete createManyAndReturn
   */
  export type athleteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * The data used to create many athletes.
     */
    data: athleteCreateManyInput | athleteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete update
   */
  export type athleteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * The data needed to update a athlete.
     */
    data: XOR<athleteUpdateInput, athleteUncheckedUpdateInput>
    /**
     * Choose, which athlete to update.
     */
    where: athleteWhereUniqueInput
  }

  /**
   * athlete updateMany
   */
  export type athleteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update athletes.
     */
    data: XOR<athleteUpdateManyMutationInput, athleteUncheckedUpdateManyInput>
    /**
     * Filter which athletes to update
     */
    where?: athleteWhereInput
    /**
     * Limit how many athletes to update.
     */
    limit?: number
  }

  /**
   * athlete updateManyAndReturn
   */
  export type athleteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * The data used to update athletes.
     */
    data: XOR<athleteUpdateManyMutationInput, athleteUncheckedUpdateManyInput>
    /**
     * Filter which athletes to update
     */
    where?: athleteWhereInput
    /**
     * Limit how many athletes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete upsert
   */
  export type athleteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * The filter to search for the athlete to update in case it exists.
     */
    where: athleteWhereUniqueInput
    /**
     * In case the athlete found by the `where` argument doesn't exist, create a new athlete with this data.
     */
    create: XOR<athleteCreateInput, athleteUncheckedCreateInput>
    /**
     * In case the athlete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<athleteUpdateInput, athleteUncheckedUpdateInput>
  }

  /**
   * athlete delete
   */
  export type athleteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    /**
     * Filter which athlete to delete.
     */
    where: athleteWhereUniqueInput
  }

  /**
   * athlete deleteMany
   */
  export type athleteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athletes to delete
     */
    where?: athleteWhereInput
    /**
     * Limit how many athletes to delete.
     */
    limit?: number
  }

  /**
   * athlete.athlete_competition
   */
  export type athlete$athlete_competitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    where?: athlete_competitionWhereInput
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    cursor?: athlete_competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * athlete.athlete_sport
   */
  export type athlete$athlete_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    where?: athlete_sportWhereInput
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    cursor?: athlete_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * athlete without action
   */
  export type athleteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
  }


  /**
   * Model athlete_competition
   */

  export type AggregateAthlete_competition = {
    _count: Athlete_competitionCountAggregateOutputType | null
    _avg: Athlete_competitionAvgAggregateOutputType | null
    _sum: Athlete_competitionSumAggregateOutputType | null
    _min: Athlete_competitionMinAggregateOutputType | null
    _max: Athlete_competitionMaxAggregateOutputType | null
  }

  export type Athlete_competitionAvgAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    competition_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Athlete_competitionSumAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    competition_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Athlete_competitionMinAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    competition_id: number | null
    placement: $Enums.athlete_competition_placement | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type Athlete_competitionMaxAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    competition_id: number | null
    placement: $Enums.athlete_competition_placement | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type Athlete_competitionCountAggregateOutputType = {
    id: number
    athlete_id: number
    competition_id: number
    placement: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type Athlete_competitionAvgAggregateInputType = {
    id?: true
    athlete_id?: true
    competition_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Athlete_competitionSumAggregateInputType = {
    id?: true
    athlete_id?: true
    competition_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Athlete_competitionMinAggregateInputType = {
    id?: true
    athlete_id?: true
    competition_id?: true
    placement?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type Athlete_competitionMaxAggregateInputType = {
    id?: true
    athlete_id?: true
    competition_id?: true
    placement?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type Athlete_competitionCountAggregateInputType = {
    id?: true
    athlete_id?: true
    competition_id?: true
    placement?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type Athlete_competitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athlete_competition to aggregate.
     */
    where?: athlete_competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_competitions to fetch.
     */
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: athlete_competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned athlete_competitions
    **/
    _count?: true | Athlete_competitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Athlete_competitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Athlete_competitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Athlete_competitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Athlete_competitionMaxAggregateInputType
  }

  export type GetAthlete_competitionAggregateType<T extends Athlete_competitionAggregateArgs> = {
        [P in keyof T & keyof AggregateAthlete_competition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthlete_competition[P]>
      : GetScalarType<T[P], AggregateAthlete_competition[P]>
  }




  export type athlete_competitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_competitionWhereInput
    orderBy?: athlete_competitionOrderByWithAggregationInput | athlete_competitionOrderByWithAggregationInput[]
    by: Athlete_competitionScalarFieldEnum[] | Athlete_competitionScalarFieldEnum
    having?: athlete_competitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Athlete_competitionCountAggregateInputType | true
    _avg?: Athlete_competitionAvgAggregateInputType
    _sum?: Athlete_competitionSumAggregateInputType
    _min?: Athlete_competitionMinAggregateInputType
    _max?: Athlete_competitionMaxAggregateInputType
  }

  export type Athlete_competitionGroupByOutputType = {
    id: number
    athlete_id: number
    competition_id: number
    placement: $Enums.athlete_competition_placement | null
    created_at: Date | null
    created_by: number
    updated_at: Date | null
    updated_by: number
    _count: Athlete_competitionCountAggregateOutputType | null
    _avg: Athlete_competitionAvgAggregateOutputType | null
    _sum: Athlete_competitionSumAggregateOutputType | null
    _min: Athlete_competitionMinAggregateOutputType | null
    _max: Athlete_competitionMaxAggregateOutputType | null
  }

  type GetAthlete_competitionGroupByPayload<T extends athlete_competitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Athlete_competitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Athlete_competitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Athlete_competitionGroupByOutputType[P]>
            : GetScalarType<T[P], Athlete_competitionGroupByOutputType[P]>
        }
      >
    >


  export type athlete_competitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    competition_id?: boolean
    placement?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_competition"]>

  export type athlete_competitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    competition_id?: boolean
    placement?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_competition"]>

  export type athlete_competitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    competition_id?: boolean
    placement?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_competition"]>

  export type athlete_competitionSelectScalar = {
    id?: boolean
    athlete_id?: boolean
    competition_id?: boolean
    placement?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type athlete_competitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athlete_id" | "competition_id" | "placement" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["athlete_competition"]>
  export type athlete_competitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type athlete_competitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type athlete_competitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    users_athlete_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_athlete_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $athlete_competitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "athlete_competition"
    objects: {
      athlete: Prisma.$athletePayload<ExtArgs>
      competition: Prisma.$competitionPayload<ExtArgs>
      users_athlete_competition_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_athlete_competition_updated_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      athlete_id: number
      competition_id: number
      placement: $Enums.athlete_competition_placement | null
      created_at: Date | null
      created_by: number
      updated_at: Date | null
      updated_by: number
    }, ExtArgs["result"]["athlete_competition"]>
    composites: {}
  }

  type athlete_competitionGetPayload<S extends boolean | null | undefined | athlete_competitionDefaultArgs> = $Result.GetResult<Prisma.$athlete_competitionPayload, S>

  type athlete_competitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<athlete_competitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Athlete_competitionCountAggregateInputType | true
    }

  export interface athlete_competitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['athlete_competition'], meta: { name: 'athlete_competition' } }
    /**
     * Find zero or one Athlete_competition that matches the filter.
     * @param {athlete_competitionFindUniqueArgs} args - Arguments to find a Athlete_competition
     * @example
     * // Get one Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends athlete_competitionFindUniqueArgs>(args: SelectSubset<T, athlete_competitionFindUniqueArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Athlete_competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {athlete_competitionFindUniqueOrThrowArgs} args - Arguments to find a Athlete_competition
     * @example
     * // Get one Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends athlete_competitionFindUniqueOrThrowArgs>(args: SelectSubset<T, athlete_competitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete_competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionFindFirstArgs} args - Arguments to find a Athlete_competition
     * @example
     * // Get one Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends athlete_competitionFindFirstArgs>(args?: SelectSubset<T, athlete_competitionFindFirstArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete_competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionFindFirstOrThrowArgs} args - Arguments to find a Athlete_competition
     * @example
     * // Get one Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends athlete_competitionFindFirstOrThrowArgs>(args?: SelectSubset<T, athlete_competitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Athlete_competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athlete_competitions
     * const athlete_competitions = await prisma.athlete_competition.findMany()
     * 
     * // Get first 10 Athlete_competitions
     * const athlete_competitions = await prisma.athlete_competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athlete_competitionWithIdOnly = await prisma.athlete_competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends athlete_competitionFindManyArgs>(args?: SelectSubset<T, athlete_competitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Athlete_competition.
     * @param {athlete_competitionCreateArgs} args - Arguments to create a Athlete_competition.
     * @example
     * // Create one Athlete_competition
     * const Athlete_competition = await prisma.athlete_competition.create({
     *   data: {
     *     // ... data to create a Athlete_competition
     *   }
     * })
     * 
     */
    create<T extends athlete_competitionCreateArgs>(args: SelectSubset<T, athlete_competitionCreateArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Athlete_competitions.
     * @param {athlete_competitionCreateManyArgs} args - Arguments to create many Athlete_competitions.
     * @example
     * // Create many Athlete_competitions
     * const athlete_competition = await prisma.athlete_competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends athlete_competitionCreateManyArgs>(args?: SelectSubset<T, athlete_competitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athlete_competitions and returns the data saved in the database.
     * @param {athlete_competitionCreateManyAndReturnArgs} args - Arguments to create many Athlete_competitions.
     * @example
     * // Create many Athlete_competitions
     * const athlete_competition = await prisma.athlete_competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athlete_competitions and only return the `id`
     * const athlete_competitionWithIdOnly = await prisma.athlete_competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends athlete_competitionCreateManyAndReturnArgs>(args?: SelectSubset<T, athlete_competitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Athlete_competition.
     * @param {athlete_competitionDeleteArgs} args - Arguments to delete one Athlete_competition.
     * @example
     * // Delete one Athlete_competition
     * const Athlete_competition = await prisma.athlete_competition.delete({
     *   where: {
     *     // ... filter to delete one Athlete_competition
     *   }
     * })
     * 
     */
    delete<T extends athlete_competitionDeleteArgs>(args: SelectSubset<T, athlete_competitionDeleteArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Athlete_competition.
     * @param {athlete_competitionUpdateArgs} args - Arguments to update one Athlete_competition.
     * @example
     * // Update one Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends athlete_competitionUpdateArgs>(args: SelectSubset<T, athlete_competitionUpdateArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Athlete_competitions.
     * @param {athlete_competitionDeleteManyArgs} args - Arguments to filter Athlete_competitions to delete.
     * @example
     * // Delete a few Athlete_competitions
     * const { count } = await prisma.athlete_competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends athlete_competitionDeleteManyArgs>(args?: SelectSubset<T, athlete_competitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athlete_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athlete_competitions
     * const athlete_competition = await prisma.athlete_competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends athlete_competitionUpdateManyArgs>(args: SelectSubset<T, athlete_competitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athlete_competitions and returns the data updated in the database.
     * @param {athlete_competitionUpdateManyAndReturnArgs} args - Arguments to update many Athlete_competitions.
     * @example
     * // Update many Athlete_competitions
     * const athlete_competition = await prisma.athlete_competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athlete_competitions and only return the `id`
     * const athlete_competitionWithIdOnly = await prisma.athlete_competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends athlete_competitionUpdateManyAndReturnArgs>(args: SelectSubset<T, athlete_competitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Athlete_competition.
     * @param {athlete_competitionUpsertArgs} args - Arguments to update or create a Athlete_competition.
     * @example
     * // Update or create a Athlete_competition
     * const athlete_competition = await prisma.athlete_competition.upsert({
     *   create: {
     *     // ... data to create a Athlete_competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athlete_competition we want to update
     *   }
     * })
     */
    upsert<T extends athlete_competitionUpsertArgs>(args: SelectSubset<T, athlete_competitionUpsertArgs<ExtArgs>>): Prisma__athlete_competitionClient<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Athlete_competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionCountArgs} args - Arguments to filter Athlete_competitions to count.
     * @example
     * // Count the number of Athlete_competitions
     * const count = await prisma.athlete_competition.count({
     *   where: {
     *     // ... the filter for the Athlete_competitions we want to count
     *   }
     * })
    **/
    count<T extends athlete_competitionCountArgs>(
      args?: Subset<T, athlete_competitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Athlete_competitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athlete_competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Athlete_competitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Athlete_competitionAggregateArgs>(args: Subset<T, Athlete_competitionAggregateArgs>): Prisma.PrismaPromise<GetAthlete_competitionAggregateType<T>>

    /**
     * Group by Athlete_competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_competitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends athlete_competitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: athlete_competitionGroupByArgs['orderBy'] }
        : { orderBy?: athlete_competitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, athlete_competitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthlete_competitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the athlete_competition model
   */
  readonly fields: athlete_competitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for athlete_competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__athlete_competitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete<T extends athleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, athleteDefaultArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competition<T extends competitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, competitionDefaultArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_athlete_competition_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_athlete_competition_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the athlete_competition model
   */
  interface athlete_competitionFieldRefs {
    readonly id: FieldRef<"athlete_competition", 'Int'>
    readonly athlete_id: FieldRef<"athlete_competition", 'Int'>
    readonly competition_id: FieldRef<"athlete_competition", 'Int'>
    readonly placement: FieldRef<"athlete_competition", 'athlete_competition_placement'>
    readonly created_at: FieldRef<"athlete_competition", 'DateTime'>
    readonly created_by: FieldRef<"athlete_competition", 'Int'>
    readonly updated_at: FieldRef<"athlete_competition", 'DateTime'>
    readonly updated_by: FieldRef<"athlete_competition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * athlete_competition findUnique
   */
  export type athlete_competitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter, which athlete_competition to fetch.
     */
    where: athlete_competitionWhereUniqueInput
  }

  /**
   * athlete_competition findUniqueOrThrow
   */
  export type athlete_competitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter, which athlete_competition to fetch.
     */
    where: athlete_competitionWhereUniqueInput
  }

  /**
   * athlete_competition findFirst
   */
  export type athlete_competitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter, which athlete_competition to fetch.
     */
    where?: athlete_competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_competitions to fetch.
     */
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athlete_competitions.
     */
    cursor?: athlete_competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athlete_competitions.
     */
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * athlete_competition findFirstOrThrow
   */
  export type athlete_competitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter, which athlete_competition to fetch.
     */
    where?: athlete_competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_competitions to fetch.
     */
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athlete_competitions.
     */
    cursor?: athlete_competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athlete_competitions.
     */
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * athlete_competition findMany
   */
  export type athlete_competitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter, which athlete_competitions to fetch.
     */
    where?: athlete_competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_competitions to fetch.
     */
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing athlete_competitions.
     */
    cursor?: athlete_competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_competitions.
     */
    skip?: number
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * athlete_competition create
   */
  export type athlete_competitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * The data needed to create a athlete_competition.
     */
    data: XOR<athlete_competitionCreateInput, athlete_competitionUncheckedCreateInput>
  }

  /**
   * athlete_competition createMany
   */
  export type athlete_competitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many athlete_competitions.
     */
    data: athlete_competitionCreateManyInput | athlete_competitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * athlete_competition createManyAndReturn
   */
  export type athlete_competitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * The data used to create many athlete_competitions.
     */
    data: athlete_competitionCreateManyInput | athlete_competitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete_competition update
   */
  export type athlete_competitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * The data needed to update a athlete_competition.
     */
    data: XOR<athlete_competitionUpdateInput, athlete_competitionUncheckedUpdateInput>
    /**
     * Choose, which athlete_competition to update.
     */
    where: athlete_competitionWhereUniqueInput
  }

  /**
   * athlete_competition updateMany
   */
  export type athlete_competitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update athlete_competitions.
     */
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyInput>
    /**
     * Filter which athlete_competitions to update
     */
    where?: athlete_competitionWhereInput
    /**
     * Limit how many athlete_competitions to update.
     */
    limit?: number
  }

  /**
   * athlete_competition updateManyAndReturn
   */
  export type athlete_competitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * The data used to update athlete_competitions.
     */
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyInput>
    /**
     * Filter which athlete_competitions to update
     */
    where?: athlete_competitionWhereInput
    /**
     * Limit how many athlete_competitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete_competition upsert
   */
  export type athlete_competitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * The filter to search for the athlete_competition to update in case it exists.
     */
    where: athlete_competitionWhereUniqueInput
    /**
     * In case the athlete_competition found by the `where` argument doesn't exist, create a new athlete_competition with this data.
     */
    create: XOR<athlete_competitionCreateInput, athlete_competitionUncheckedCreateInput>
    /**
     * In case the athlete_competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<athlete_competitionUpdateInput, athlete_competitionUncheckedUpdateInput>
  }

  /**
   * athlete_competition delete
   */
  export type athlete_competitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    /**
     * Filter which athlete_competition to delete.
     */
    where: athlete_competitionWhereUniqueInput
  }

  /**
   * athlete_competition deleteMany
   */
  export type athlete_competitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athlete_competitions to delete
     */
    where?: athlete_competitionWhereInput
    /**
     * Limit how many athlete_competitions to delete.
     */
    limit?: number
  }

  /**
   * athlete_competition without action
   */
  export type athlete_competitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
  }


  /**
   * Model athlete_sport
   */

  export type AggregateAthlete_sport = {
    _count: Athlete_sportCountAggregateOutputType | null
    _avg: Athlete_sportAvgAggregateOutputType | null
    _sum: Athlete_sportSumAggregateOutputType | null
    _min: Athlete_sportMinAggregateOutputType | null
    _max: Athlete_sportMaxAggregateOutputType | null
  }

  export type Athlete_sportAvgAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    sport_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Athlete_sportSumAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    sport_id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Athlete_sportMinAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    sport_id: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type Athlete_sportMaxAggregateOutputType = {
    id: number | null
    athlete_id: number | null
    sport_id: number | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type Athlete_sportCountAggregateOutputType = {
    id: number
    athlete_id: number
    sport_id: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type Athlete_sportAvgAggregateInputType = {
    id?: true
    athlete_id?: true
    sport_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Athlete_sportSumAggregateInputType = {
    id?: true
    athlete_id?: true
    sport_id?: true
    created_by?: true
    updated_by?: true
  }

  export type Athlete_sportMinAggregateInputType = {
    id?: true
    athlete_id?: true
    sport_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type Athlete_sportMaxAggregateInputType = {
    id?: true
    athlete_id?: true
    sport_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type Athlete_sportCountAggregateInputType = {
    id?: true
    athlete_id?: true
    sport_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type Athlete_sportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athlete_sport to aggregate.
     */
    where?: athlete_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_sports to fetch.
     */
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: athlete_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned athlete_sports
    **/
    _count?: true | Athlete_sportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Athlete_sportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Athlete_sportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Athlete_sportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Athlete_sportMaxAggregateInputType
  }

  export type GetAthlete_sportAggregateType<T extends Athlete_sportAggregateArgs> = {
        [P in keyof T & keyof AggregateAthlete_sport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthlete_sport[P]>
      : GetScalarType<T[P], AggregateAthlete_sport[P]>
  }




  export type athlete_sportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: athlete_sportWhereInput
    orderBy?: athlete_sportOrderByWithAggregationInput | athlete_sportOrderByWithAggregationInput[]
    by: Athlete_sportScalarFieldEnum[] | Athlete_sportScalarFieldEnum
    having?: athlete_sportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Athlete_sportCountAggregateInputType | true
    _avg?: Athlete_sportAvgAggregateInputType
    _sum?: Athlete_sportSumAggregateInputType
    _min?: Athlete_sportMinAggregateInputType
    _max?: Athlete_sportMaxAggregateInputType
  }

  export type Athlete_sportGroupByOutputType = {
    id: number
    athlete_id: number
    sport_id: number
    created_at: Date | null
    created_by: number
    updated_at: Date | null
    updated_by: number
    _count: Athlete_sportCountAggregateOutputType | null
    _avg: Athlete_sportAvgAggregateOutputType | null
    _sum: Athlete_sportSumAggregateOutputType | null
    _min: Athlete_sportMinAggregateOutputType | null
    _max: Athlete_sportMaxAggregateOutputType | null
  }

  type GetAthlete_sportGroupByPayload<T extends athlete_sportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Athlete_sportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Athlete_sportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Athlete_sportGroupByOutputType[P]>
            : GetScalarType<T[P], Athlete_sportGroupByOutputType[P]>
        }
      >
    >


  export type athlete_sportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_sport"]>

  export type athlete_sportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_sport"]>

  export type athlete_sportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athlete_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athlete_sport"]>

  export type athlete_sportSelectScalar = {
    id?: boolean
    athlete_id?: boolean
    sport_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type athlete_sportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athlete_id" | "sport_id" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["athlete_sport"]>
  export type athlete_sportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type athlete_sportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type athlete_sportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete?: boolean | athleteDefaultArgs<ExtArgs>
    users_athlete_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    sport?: boolean | sportDefaultArgs<ExtArgs>
    users_athlete_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $athlete_sportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "athlete_sport"
    objects: {
      athlete: Prisma.$athletePayload<ExtArgs>
      users_athlete_sport_created_byTousers: Prisma.$usersPayload<ExtArgs>
      sport: Prisma.$sportPayload<ExtArgs>
      users_athlete_sport_updated_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      athlete_id: number
      sport_id: number
      created_at: Date | null
      created_by: number
      updated_at: Date | null
      updated_by: number
    }, ExtArgs["result"]["athlete_sport"]>
    composites: {}
  }

  type athlete_sportGetPayload<S extends boolean | null | undefined | athlete_sportDefaultArgs> = $Result.GetResult<Prisma.$athlete_sportPayload, S>

  type athlete_sportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<athlete_sportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Athlete_sportCountAggregateInputType | true
    }

  export interface athlete_sportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['athlete_sport'], meta: { name: 'athlete_sport' } }
    /**
     * Find zero or one Athlete_sport that matches the filter.
     * @param {athlete_sportFindUniqueArgs} args - Arguments to find a Athlete_sport
     * @example
     * // Get one Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends athlete_sportFindUniqueArgs>(args: SelectSubset<T, athlete_sportFindUniqueArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Athlete_sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {athlete_sportFindUniqueOrThrowArgs} args - Arguments to find a Athlete_sport
     * @example
     * // Get one Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends athlete_sportFindUniqueOrThrowArgs>(args: SelectSubset<T, athlete_sportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete_sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportFindFirstArgs} args - Arguments to find a Athlete_sport
     * @example
     * // Get one Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends athlete_sportFindFirstArgs>(args?: SelectSubset<T, athlete_sportFindFirstArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athlete_sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportFindFirstOrThrowArgs} args - Arguments to find a Athlete_sport
     * @example
     * // Get one Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends athlete_sportFindFirstOrThrowArgs>(args?: SelectSubset<T, athlete_sportFindFirstOrThrowArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Athlete_sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athlete_sports
     * const athlete_sports = await prisma.athlete_sport.findMany()
     * 
     * // Get first 10 Athlete_sports
     * const athlete_sports = await prisma.athlete_sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athlete_sportWithIdOnly = await prisma.athlete_sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends athlete_sportFindManyArgs>(args?: SelectSubset<T, athlete_sportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Athlete_sport.
     * @param {athlete_sportCreateArgs} args - Arguments to create a Athlete_sport.
     * @example
     * // Create one Athlete_sport
     * const Athlete_sport = await prisma.athlete_sport.create({
     *   data: {
     *     // ... data to create a Athlete_sport
     *   }
     * })
     * 
     */
    create<T extends athlete_sportCreateArgs>(args: SelectSubset<T, athlete_sportCreateArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Athlete_sports.
     * @param {athlete_sportCreateManyArgs} args - Arguments to create many Athlete_sports.
     * @example
     * // Create many Athlete_sports
     * const athlete_sport = await prisma.athlete_sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends athlete_sportCreateManyArgs>(args?: SelectSubset<T, athlete_sportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athlete_sports and returns the data saved in the database.
     * @param {athlete_sportCreateManyAndReturnArgs} args - Arguments to create many Athlete_sports.
     * @example
     * // Create many Athlete_sports
     * const athlete_sport = await prisma.athlete_sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athlete_sports and only return the `id`
     * const athlete_sportWithIdOnly = await prisma.athlete_sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends athlete_sportCreateManyAndReturnArgs>(args?: SelectSubset<T, athlete_sportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Athlete_sport.
     * @param {athlete_sportDeleteArgs} args - Arguments to delete one Athlete_sport.
     * @example
     * // Delete one Athlete_sport
     * const Athlete_sport = await prisma.athlete_sport.delete({
     *   where: {
     *     // ... filter to delete one Athlete_sport
     *   }
     * })
     * 
     */
    delete<T extends athlete_sportDeleteArgs>(args: SelectSubset<T, athlete_sportDeleteArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Athlete_sport.
     * @param {athlete_sportUpdateArgs} args - Arguments to update one Athlete_sport.
     * @example
     * // Update one Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends athlete_sportUpdateArgs>(args: SelectSubset<T, athlete_sportUpdateArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Athlete_sports.
     * @param {athlete_sportDeleteManyArgs} args - Arguments to filter Athlete_sports to delete.
     * @example
     * // Delete a few Athlete_sports
     * const { count } = await prisma.athlete_sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends athlete_sportDeleteManyArgs>(args?: SelectSubset<T, athlete_sportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athlete_sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athlete_sports
     * const athlete_sport = await prisma.athlete_sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends athlete_sportUpdateManyArgs>(args: SelectSubset<T, athlete_sportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athlete_sports and returns the data updated in the database.
     * @param {athlete_sportUpdateManyAndReturnArgs} args - Arguments to update many Athlete_sports.
     * @example
     * // Update many Athlete_sports
     * const athlete_sport = await prisma.athlete_sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athlete_sports and only return the `id`
     * const athlete_sportWithIdOnly = await prisma.athlete_sport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends athlete_sportUpdateManyAndReturnArgs>(args: SelectSubset<T, athlete_sportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Athlete_sport.
     * @param {athlete_sportUpsertArgs} args - Arguments to update or create a Athlete_sport.
     * @example
     * // Update or create a Athlete_sport
     * const athlete_sport = await prisma.athlete_sport.upsert({
     *   create: {
     *     // ... data to create a Athlete_sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athlete_sport we want to update
     *   }
     * })
     */
    upsert<T extends athlete_sportUpsertArgs>(args: SelectSubset<T, athlete_sportUpsertArgs<ExtArgs>>): Prisma__athlete_sportClient<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Athlete_sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportCountArgs} args - Arguments to filter Athlete_sports to count.
     * @example
     * // Count the number of Athlete_sports
     * const count = await prisma.athlete_sport.count({
     *   where: {
     *     // ... the filter for the Athlete_sports we want to count
     *   }
     * })
    **/
    count<T extends athlete_sportCountArgs>(
      args?: Subset<T, athlete_sportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Athlete_sportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athlete_sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Athlete_sportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Athlete_sportAggregateArgs>(args: Subset<T, Athlete_sportAggregateArgs>): Prisma.PrismaPromise<GetAthlete_sportAggregateType<T>>

    /**
     * Group by Athlete_sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {athlete_sportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends athlete_sportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: athlete_sportGroupByArgs['orderBy'] }
        : { orderBy?: athlete_sportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, athlete_sportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthlete_sportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the athlete_sport model
   */
  readonly fields: athlete_sportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for athlete_sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__athlete_sportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete<T extends athleteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, athleteDefaultArgs<ExtArgs>>): Prisma__athleteClient<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_athlete_sport_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends sportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sportDefaultArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_athlete_sport_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the athlete_sport model
   */
  interface athlete_sportFieldRefs {
    readonly id: FieldRef<"athlete_sport", 'Int'>
    readonly athlete_id: FieldRef<"athlete_sport", 'Int'>
    readonly sport_id: FieldRef<"athlete_sport", 'Int'>
    readonly created_at: FieldRef<"athlete_sport", 'DateTime'>
    readonly created_by: FieldRef<"athlete_sport", 'Int'>
    readonly updated_at: FieldRef<"athlete_sport", 'DateTime'>
    readonly updated_by: FieldRef<"athlete_sport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * athlete_sport findUnique
   */
  export type athlete_sportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter, which athlete_sport to fetch.
     */
    where: athlete_sportWhereUniqueInput
  }

  /**
   * athlete_sport findUniqueOrThrow
   */
  export type athlete_sportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter, which athlete_sport to fetch.
     */
    where: athlete_sportWhereUniqueInput
  }

  /**
   * athlete_sport findFirst
   */
  export type athlete_sportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter, which athlete_sport to fetch.
     */
    where?: athlete_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_sports to fetch.
     */
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athlete_sports.
     */
    cursor?: athlete_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athlete_sports.
     */
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * athlete_sport findFirstOrThrow
   */
  export type athlete_sportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter, which athlete_sport to fetch.
     */
    where?: athlete_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_sports to fetch.
     */
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for athlete_sports.
     */
    cursor?: athlete_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of athlete_sports.
     */
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * athlete_sport findMany
   */
  export type athlete_sportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter, which athlete_sports to fetch.
     */
    where?: athlete_sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of athlete_sports to fetch.
     */
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing athlete_sports.
     */
    cursor?: athlete_sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` athlete_sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` athlete_sports.
     */
    skip?: number
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * athlete_sport create
   */
  export type athlete_sportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * The data needed to create a athlete_sport.
     */
    data: XOR<athlete_sportCreateInput, athlete_sportUncheckedCreateInput>
  }

  /**
   * athlete_sport createMany
   */
  export type athlete_sportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many athlete_sports.
     */
    data: athlete_sportCreateManyInput | athlete_sportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * athlete_sport createManyAndReturn
   */
  export type athlete_sportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * The data used to create many athlete_sports.
     */
    data: athlete_sportCreateManyInput | athlete_sportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete_sport update
   */
  export type athlete_sportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * The data needed to update a athlete_sport.
     */
    data: XOR<athlete_sportUpdateInput, athlete_sportUncheckedUpdateInput>
    /**
     * Choose, which athlete_sport to update.
     */
    where: athlete_sportWhereUniqueInput
  }

  /**
   * athlete_sport updateMany
   */
  export type athlete_sportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update athlete_sports.
     */
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyInput>
    /**
     * Filter which athlete_sports to update
     */
    where?: athlete_sportWhereInput
    /**
     * Limit how many athlete_sports to update.
     */
    limit?: number
  }

  /**
   * athlete_sport updateManyAndReturn
   */
  export type athlete_sportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * The data used to update athlete_sports.
     */
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyInput>
    /**
     * Filter which athlete_sports to update
     */
    where?: athlete_sportWhereInput
    /**
     * Limit how many athlete_sports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * athlete_sport upsert
   */
  export type athlete_sportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * The filter to search for the athlete_sport to update in case it exists.
     */
    where: athlete_sportWhereUniqueInput
    /**
     * In case the athlete_sport found by the `where` argument doesn't exist, create a new athlete_sport with this data.
     */
    create: XOR<athlete_sportCreateInput, athlete_sportUncheckedCreateInput>
    /**
     * In case the athlete_sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<athlete_sportUpdateInput, athlete_sportUncheckedUpdateInput>
  }

  /**
   * athlete_sport delete
   */
  export type athlete_sportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    /**
     * Filter which athlete_sport to delete.
     */
    where: athlete_sportWhereUniqueInput
  }

  /**
   * athlete_sport deleteMany
   */
  export type athlete_sportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which athlete_sports to delete
     */
    where?: athlete_sportWhereInput
    /**
     * Limit how many athlete_sports to delete.
     */
    limit?: number
  }

  /**
   * athlete_sport without action
   */
  export type athlete_sportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
  }


  /**
   * Model competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: number | null
    title: string | null
    level: $Enums.competition_level | null
    from_date: Date | null
    until_date: Date | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    level: $Enums.competition_level | null
    from_date: Date | null
    until_date: Date | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    title: number
    level: number
    from_date: number
    until_date: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type CompetitionSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    title?: true
    level?: true
    from_date?: true
    until_date?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    title?: true
    level?: true
    from_date?: true
    until_date?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    title?: true
    level?: true
    from_date?: true
    until_date?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition to aggregate.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type competitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competitionWhereInput
    orderBy?: competitionOrderByWithAggregationInput | competitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: competitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: number
    title: string
    level: $Enums.competition_level
    from_date: Date
    until_date: Date
    created_at: Date | null
    created_by: number
    updated_at: Date | null
    updated_by: number
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends competitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type competitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    level?: boolean
    from_date?: boolean
    until_date?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete_competition?: boolean | competition$athlete_competitionArgs<ExtArgs>
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    level?: boolean
    from_date?: boolean
    until_date?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    level?: boolean
    from_date?: boolean
    until_date?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type competitionSelectScalar = {
    id?: boolean
    title?: boolean
    level?: boolean
    from_date?: boolean
    until_date?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type competitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "level" | "from_date" | "until_date" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["competition"]>
  export type competitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_competition?: boolean | competition$athlete_competitionArgs<ExtArgs>
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type competitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type competitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_competition_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_competition_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $competitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition"
    objects: {
      athlete_competition: Prisma.$athlete_competitionPayload<ExtArgs>[]
      users_competition_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_competition_updated_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      level: $Enums.competition_level
      from_date: Date
      until_date: Date
      created_at: Date | null
      created_by: number
      updated_at: Date | null
      updated_by: number
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type competitionGetPayload<S extends boolean | null | undefined | competitionDefaultArgs> = $Result.GetResult<Prisma.$competitionPayload, S>

  type competitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface competitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition'], meta: { name: 'competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {competitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competitionFindUniqueArgs>(args: SelectSubset<T, competitionFindUniqueArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competitionFindUniqueOrThrowArgs>(args: SelectSubset<T, competitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competitionFindFirstArgs>(args?: SelectSubset<T, competitionFindFirstArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competitionFindFirstOrThrowArgs>(args?: SelectSubset<T, competitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends competitionFindManyArgs>(args?: SelectSubset<T, competitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {competitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends competitionCreateArgs>(args: SelectSubset<T, competitionCreateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {competitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competitionCreateManyArgs>(args?: SelectSubset<T, competitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {competitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends competitionCreateManyAndReturnArgs>(args?: SelectSubset<T, competitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {competitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends competitionDeleteArgs>(args: SelectSubset<T, competitionDeleteArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {competitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competitionUpdateArgs>(args: SelectSubset<T, competitionUpdateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {competitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competitionDeleteManyArgs>(args?: SelectSubset<T, competitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competitionUpdateManyArgs>(args: SelectSubset<T, competitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {competitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends competitionUpdateManyAndReturnArgs>(args: SelectSubset<T, competitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {competitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends competitionUpsertArgs>(args: SelectSubset<T, competitionUpsertArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends competitionCountArgs>(
      args?: Subset<T, competitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competitionGroupByArgs['orderBy'] }
        : { orderBy?: competitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition model
   */
  readonly fields: competitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete_competition<T extends competition$athlete_competitionArgs<ExtArgs> = {}>(args?: Subset<T, competition$athlete_competitionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_competition_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_competition_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition model
   */
  interface competitionFieldRefs {
    readonly id: FieldRef<"competition", 'Int'>
    readonly title: FieldRef<"competition", 'String'>
    readonly level: FieldRef<"competition", 'competition_level'>
    readonly from_date: FieldRef<"competition", 'DateTime'>
    readonly until_date: FieldRef<"competition", 'DateTime'>
    readonly created_at: FieldRef<"competition", 'DateTime'>
    readonly created_by: FieldRef<"competition", 'Int'>
    readonly updated_at: FieldRef<"competition", 'DateTime'>
    readonly updated_by: FieldRef<"competition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * competition findUnique
   */
  export type competitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findUniqueOrThrow
   */
  export type competitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findFirst
   */
  export type competitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findFirstOrThrow
   */
  export type competitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findMany
   */
  export type competitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competitions to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition create
   */
  export type competitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The data needed to create a competition.
     */
    data: XOR<competitionCreateInput, competitionUncheckedCreateInput>
  }

  /**
   * competition createMany
   */
  export type competitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competitions.
     */
    data: competitionCreateManyInput | competitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competition createManyAndReturn
   */
  export type competitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data used to create many competitions.
     */
    data: competitionCreateManyInput | competitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * competition update
   */
  export type competitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The data needed to update a competition.
     */
    data: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
    /**
     * Choose, which competition to update.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition updateMany
   */
  export type competitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competitions.
     */
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyInput>
    /**
     * Filter which competitions to update
     */
    where?: competitionWhereInput
    /**
     * Limit how many competitions to update.
     */
    limit?: number
  }

  /**
   * competition updateManyAndReturn
   */
  export type competitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * The data used to update competitions.
     */
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyInput>
    /**
     * Filter which competitions to update
     */
    where?: competitionWhereInput
    /**
     * Limit how many competitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * competition upsert
   */
  export type competitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The filter to search for the competition to update in case it exists.
     */
    where: competitionWhereUniqueInput
    /**
     * In case the competition found by the `where` argument doesn't exist, create a new competition with this data.
     */
    create: XOR<competitionCreateInput, competitionUncheckedCreateInput>
    /**
     * In case the competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
  }

  /**
   * competition delete
   */
  export type competitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter which competition to delete.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition deleteMany
   */
  export type competitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competitions to delete
     */
    where?: competitionWhereInput
    /**
     * Limit how many competitions to delete.
     */
    limit?: number
  }

  /**
   * competition.athlete_competition
   */
  export type competition$athlete_competitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    where?: athlete_competitionWhereInput
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    cursor?: athlete_competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * competition without action
   */
  export type competitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
  }


  /**
   * Model sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type SportSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type SportMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type SportMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    created_by: number | null
    updated_at: Date | null
    updated_by: number | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    _all: number
  }


  export type SportAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type SportSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type SportMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sport to aggregate.
     */
    where?: sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type sportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sportWhereInput
    orderBy?: sportOrderByWithAggregationInput | sportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: sportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _avg?: SportAvgAggregateInputType
    _sum?: SportSumAggregateInputType
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    created_by: number
    updated_at: Date | null
    updated_by: number
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends sportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type sportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    athlete_sport?: boolean | sport$athlete_sportArgs<ExtArgs>
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type sportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type sportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type sportSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
  }

  export type sportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "created_by" | "updated_at" | "updated_by", ExtArgs["result"]["sport"]>
  export type sportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_sport?: boolean | sport$athlete_sportArgs<ExtArgs>
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_sport_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_sport_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sport"
    objects: {
      athlete_sport: Prisma.$athlete_sportPayload<ExtArgs>[]
      users_sport_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_sport_updated_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
      created_by: number
      updated_at: Date | null
      updated_by: number
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type sportGetPayload<S extends boolean | null | undefined | sportDefaultArgs> = $Result.GetResult<Prisma.$sportPayload, S>

  type sportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface sportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sport'], meta: { name: 'sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {sportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sportFindUniqueArgs>(args: SelectSubset<T, sportFindUniqueArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sportFindUniqueOrThrowArgs>(args: SelectSubset<T, sportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sportFindFirstArgs>(args?: SelectSubset<T, sportFindFirstArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sportFindFirstOrThrowArgs>(args?: SelectSubset<T, sportFindFirstOrThrowArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sportFindManyArgs>(args?: SelectSubset<T, sportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport.
     * @param {sportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends sportCreateArgs>(args: SelectSubset<T, sportCreateArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {sportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sportCreateManyArgs>(args?: SelectSubset<T, sportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {sportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sportCreateManyAndReturnArgs>(args?: SelectSubset<T, sportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport.
     * @param {sportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends sportDeleteArgs>(args: SelectSubset<T, sportDeleteArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport.
     * @param {sportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sportUpdateArgs>(args: SelectSubset<T, sportUpdateArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {sportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sportDeleteManyArgs>(args?: SelectSubset<T, sportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sportUpdateManyArgs>(args: SelectSubset<T, sportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {sportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sportUpdateManyAndReturnArgs>(args: SelectSubset<T, sportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport.
     * @param {sportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends sportUpsertArgs>(args: SelectSubset<T, sportUpsertArgs<ExtArgs>>): Prisma__sportClient<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends sportCountArgs>(
      args?: Subset<T, sportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sportGroupByArgs['orderBy'] }
        : { orderBy?: sportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sport model
   */
  readonly fields: sportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete_sport<T extends sport$athlete_sportArgs<ExtArgs> = {}>(args?: Subset<T, sport$athlete_sportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_sport_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_sport_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sport model
   */
  interface sportFieldRefs {
    readonly id: FieldRef<"sport", 'Int'>
    readonly name: FieldRef<"sport", 'String'>
    readonly created_at: FieldRef<"sport", 'DateTime'>
    readonly created_by: FieldRef<"sport", 'Int'>
    readonly updated_at: FieldRef<"sport", 'DateTime'>
    readonly updated_by: FieldRef<"sport", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sport findUnique
   */
  export type sportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter, which sport to fetch.
     */
    where: sportWhereUniqueInput
  }

  /**
   * sport findUniqueOrThrow
   */
  export type sportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter, which sport to fetch.
     */
    where: sportWhereUniqueInput
  }

  /**
   * sport findFirst
   */
  export type sportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter, which sport to fetch.
     */
    where?: sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sports.
     */
    cursor?: sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * sport findFirstOrThrow
   */
  export type sportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter, which sport to fetch.
     */
    where?: sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sports.
     */
    cursor?: sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * sport findMany
   */
  export type sportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter, which sports to fetch.
     */
    where?: sportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sports to fetch.
     */
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sports.
     */
    cursor?: sportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * sport create
   */
  export type sportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * The data needed to create a sport.
     */
    data: XOR<sportCreateInput, sportUncheckedCreateInput>
  }

  /**
   * sport createMany
   */
  export type sportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sports.
     */
    data: sportCreateManyInput | sportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sport createManyAndReturn
   */
  export type sportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * The data used to create many sports.
     */
    data: sportCreateManyInput | sportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sport update
   */
  export type sportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * The data needed to update a sport.
     */
    data: XOR<sportUpdateInput, sportUncheckedUpdateInput>
    /**
     * Choose, which sport to update.
     */
    where: sportWhereUniqueInput
  }

  /**
   * sport updateMany
   */
  export type sportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sports.
     */
    data: XOR<sportUpdateManyMutationInput, sportUncheckedUpdateManyInput>
    /**
     * Filter which sports to update
     */
    where?: sportWhereInput
    /**
     * Limit how many sports to update.
     */
    limit?: number
  }

  /**
   * sport updateManyAndReturn
   */
  export type sportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * The data used to update sports.
     */
    data: XOR<sportUpdateManyMutationInput, sportUncheckedUpdateManyInput>
    /**
     * Filter which sports to update
     */
    where?: sportWhereInput
    /**
     * Limit how many sports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sport upsert
   */
  export type sportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * The filter to search for the sport to update in case it exists.
     */
    where: sportWhereUniqueInput
    /**
     * In case the sport found by the `where` argument doesn't exist, create a new sport with this data.
     */
    create: XOR<sportCreateInput, sportUncheckedCreateInput>
    /**
     * In case the sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sportUpdateInput, sportUncheckedUpdateInput>
  }

  /**
   * sport delete
   */
  export type sportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    /**
     * Filter which sport to delete.
     */
    where: sportWhereUniqueInput
  }

  /**
   * sport deleteMany
   */
  export type sportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sports to delete
     */
    where?: sportWhereInput
    /**
     * Limit how many sports to delete.
     */
    limit?: number
  }

  /**
   * sport.athlete_sport
   */
  export type sport$athlete_sportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    where?: athlete_sportWhereInput
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    cursor?: athlete_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * sport without action
   */
  export type sportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    user_role: $Enums.users_role | null
    email: string | null
    email_verified: boolean | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    user_role: $Enums.users_role | null
    email: string | null
    email_verified: boolean | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    user_role: number
    email: number
    email_verified: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    user_role?: true
    email?: true
    email_verified?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    user_role?: true
    email?: true
    email_verified?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    user_role?: true
    email?: true
    email_verified?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    surname: string
    user_role: $Enums.users_role | null
    email: string
    email_verified: boolean | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    user_role?: boolean
    email?: boolean
    email_verified?: boolean
    created_at?: boolean
    athlete_athlete_created_byTousers?: boolean | users$athlete_athlete_created_byTousersArgs<ExtArgs>
    athlete_athlete_updated_byTousers?: boolean | users$athlete_athlete_updated_byTousersArgs<ExtArgs>
    athlete_competition_athlete_competition_created_byTousers?: boolean | users$athlete_competition_athlete_competition_created_byTousersArgs<ExtArgs>
    athlete_competition_athlete_competition_updated_byTousers?: boolean | users$athlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs>
    athlete_sport_athlete_sport_created_byTousers?: boolean | users$athlete_sport_athlete_sport_created_byTousersArgs<ExtArgs>
    athlete_sport_athlete_sport_updated_byTousers?: boolean | users$athlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs>
    competition_competition_created_byTousers?: boolean | users$competition_competition_created_byTousersArgs<ExtArgs>
    competition_competition_updated_byTousers?: boolean | users$competition_competition_updated_byTousersArgs<ExtArgs>
    sport_sport_created_byTousers?: boolean | users$sport_sport_created_byTousersArgs<ExtArgs>
    sport_sport_updated_byTousers?: boolean | users$sport_sport_updated_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    user_role?: boolean
    email?: boolean
    email_verified?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    user_role?: boolean
    email?: boolean
    email_verified?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    user_role?: boolean
    email?: boolean
    email_verified?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "user_role" | "email" | "email_verified" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athlete_athlete_created_byTousers?: boolean | users$athlete_athlete_created_byTousersArgs<ExtArgs>
    athlete_athlete_updated_byTousers?: boolean | users$athlete_athlete_updated_byTousersArgs<ExtArgs>
    athlete_competition_athlete_competition_created_byTousers?: boolean | users$athlete_competition_athlete_competition_created_byTousersArgs<ExtArgs>
    athlete_competition_athlete_competition_updated_byTousers?: boolean | users$athlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs>
    athlete_sport_athlete_sport_created_byTousers?: boolean | users$athlete_sport_athlete_sport_created_byTousersArgs<ExtArgs>
    athlete_sport_athlete_sport_updated_byTousers?: boolean | users$athlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs>
    competition_competition_created_byTousers?: boolean | users$competition_competition_created_byTousersArgs<ExtArgs>
    competition_competition_updated_byTousers?: boolean | users$competition_competition_updated_byTousersArgs<ExtArgs>
    sport_sport_created_byTousers?: boolean | users$sport_sport_created_byTousersArgs<ExtArgs>
    sport_sport_updated_byTousers?: boolean | users$sport_sport_updated_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      athlete_athlete_created_byTousers: Prisma.$athletePayload<ExtArgs>[]
      athlete_athlete_updated_byTousers: Prisma.$athletePayload<ExtArgs>[]
      athlete_competition_athlete_competition_created_byTousers: Prisma.$athlete_competitionPayload<ExtArgs>[]
      athlete_competition_athlete_competition_updated_byTousers: Prisma.$athlete_competitionPayload<ExtArgs>[]
      athlete_sport_athlete_sport_created_byTousers: Prisma.$athlete_sportPayload<ExtArgs>[]
      athlete_sport_athlete_sport_updated_byTousers: Prisma.$athlete_sportPayload<ExtArgs>[]
      competition_competition_created_byTousers: Prisma.$competitionPayload<ExtArgs>[]
      competition_competition_updated_byTousers: Prisma.$competitionPayload<ExtArgs>[]
      sport_sport_created_byTousers: Prisma.$sportPayload<ExtArgs>[]
      sport_sport_updated_byTousers: Prisma.$sportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      user_role: $Enums.users_role | null
      email: string
      email_verified: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athlete_athlete_created_byTousers<T extends users$athlete_athlete_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_athlete_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_athlete_updated_byTousers<T extends users$athlete_athlete_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_athlete_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athletePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_competition_athlete_competition_created_byTousers<T extends users$athlete_competition_athlete_competition_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_competition_athlete_competition_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_competition_athlete_competition_updated_byTousers<T extends users$athlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_sport_athlete_sport_created_byTousers<T extends users$athlete_sport_athlete_sport_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_sport_athlete_sport_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    athlete_sport_athlete_sport_updated_byTousers<T extends users$athlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$athlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$athlete_sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competition_competition_created_byTousers<T extends users$competition_competition_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$competition_competition_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competition_competition_updated_byTousers<T extends users$competition_competition_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$competition_competition_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sport_sport_created_byTousers<T extends users$sport_sport_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$sport_sport_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sport_sport_updated_byTousers<T extends users$sport_sport_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$sport_sport_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly surname: FieldRef<"users", 'String'>
    readonly user_role: FieldRef<"users", 'users_role'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_verified: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.athlete_athlete_created_byTousers
   */
  export type users$athlete_athlete_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    where?: athleteWhereInput
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    cursor?: athleteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * users.athlete_athlete_updated_byTousers
   */
  export type users$athlete_athlete_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete
     */
    select?: athleteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete
     */
    omit?: athleteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athleteInclude<ExtArgs> | null
    where?: athleteWhereInput
    orderBy?: athleteOrderByWithRelationInput | athleteOrderByWithRelationInput[]
    cursor?: athleteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteScalarFieldEnum | AthleteScalarFieldEnum[]
  }

  /**
   * users.athlete_competition_athlete_competition_created_byTousers
   */
  export type users$athlete_competition_athlete_competition_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    where?: athlete_competitionWhereInput
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    cursor?: athlete_competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * users.athlete_competition_athlete_competition_updated_byTousers
   */
  export type users$athlete_competition_athlete_competition_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_competition
     */
    select?: athlete_competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_competition
     */
    omit?: athlete_competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_competitionInclude<ExtArgs> | null
    where?: athlete_competitionWhereInput
    orderBy?: athlete_competitionOrderByWithRelationInput | athlete_competitionOrderByWithRelationInput[]
    cursor?: athlete_competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_competitionScalarFieldEnum | Athlete_competitionScalarFieldEnum[]
  }

  /**
   * users.athlete_sport_athlete_sport_created_byTousers
   */
  export type users$athlete_sport_athlete_sport_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    where?: athlete_sportWhereInput
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    cursor?: athlete_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * users.athlete_sport_athlete_sport_updated_byTousers
   */
  export type users$athlete_sport_athlete_sport_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the athlete_sport
     */
    select?: athlete_sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the athlete_sport
     */
    omit?: athlete_sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: athlete_sportInclude<ExtArgs> | null
    where?: athlete_sportWhereInput
    orderBy?: athlete_sportOrderByWithRelationInput | athlete_sportOrderByWithRelationInput[]
    cursor?: athlete_sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Athlete_sportScalarFieldEnum | Athlete_sportScalarFieldEnum[]
  }

  /**
   * users.competition_competition_created_byTousers
   */
  export type users$competition_competition_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    where?: competitionWhereInput
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    cursor?: competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * users.competition_competition_updated_byTousers
   */
  export type users$competition_competition_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    where?: competitionWhereInput
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    cursor?: competitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * users.sport_sport_created_byTousers
   */
  export type users$sport_sport_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    where?: sportWhereInput
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    cursor?: sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * users.sport_sport_updated_byTousers
   */
  export type users$sport_sport_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sport
     */
    select?: sportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sport
     */
    omit?: sportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sportInclude<ExtArgs> | null
    where?: sportWhereInput
    orderBy?: sportOrderByWithRelationInput | sportOrderByWithRelationInput[]
    cursor?: sportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AthleteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    gender: 'gender',
    height: 'height',
    weight: 'weight',
    birthdate: 'birthdate',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type AthleteScalarFieldEnum = (typeof AthleteScalarFieldEnum)[keyof typeof AthleteScalarFieldEnum]


  export const Athlete_competitionScalarFieldEnum: {
    id: 'id',
    athlete_id: 'athlete_id',
    competition_id: 'competition_id',
    placement: 'placement',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type Athlete_competitionScalarFieldEnum = (typeof Athlete_competitionScalarFieldEnum)[keyof typeof Athlete_competitionScalarFieldEnum]


  export const Athlete_sportScalarFieldEnum: {
    id: 'id',
    athlete_id: 'athlete_id',
    sport_id: 'sport_id',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type Athlete_sportScalarFieldEnum = (typeof Athlete_sportScalarFieldEnum)[keyof typeof Athlete_sportScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    level: 'level',
    from_date: 'from_date',
    until_date: 'until_date',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const SportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    user_role: 'user_role',
    email: 'email',
    email_verified: 'email_verified',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'athlete_gender_enum'
   */
  export type Enumathlete_gender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'athlete_gender_enum'>
    


  /**
   * Reference to a field of type 'athlete_gender_enum[]'
   */
  export type ListEnumathlete_gender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'athlete_gender_enum[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'athlete_competition_placement'
   */
  export type Enumathlete_competition_placementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'athlete_competition_placement'>
    


  /**
   * Reference to a field of type 'athlete_competition_placement[]'
   */
  export type ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'athlete_competition_placement[]'>
    


  /**
   * Reference to a field of type 'competition_level'
   */
  export type Enumcompetition_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'competition_level'>
    


  /**
   * Reference to a field of type 'competition_level[]'
   */
  export type ListEnumcompetition_levelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'competition_level[]'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'users_role[]'
   */
  export type ListEnumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type athleteWhereInput = {
    AND?: athleteWhereInput | athleteWhereInput[]
    OR?: athleteWhereInput[]
    NOT?: athleteWhereInput | athleteWhereInput[]
    id?: IntFilter<"athlete"> | number
    name?: StringFilter<"athlete"> | string
    surname?: StringFilter<"athlete"> | string
    gender?: Enumathlete_gender_enumFilter<"athlete"> | $Enums.athlete_gender_enum
    height?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    birthdate?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_by?: IntFilter<"athlete"> | number
    updated_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    updated_by?: IntFilter<"athlete"> | number
    users_athlete_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_athlete_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    athlete_competition?: Athlete_competitionListRelationFilter
    athlete_sport?: Athlete_sportListRelationFilter
  }

  export type athleteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    users_athlete_created_byTousers?: usersOrderByWithRelationInput
    users_athlete_updated_byTousers?: usersOrderByWithRelationInput
    athlete_competition?: athlete_competitionOrderByRelationAggregateInput
    athlete_sport?: athlete_sportOrderByRelationAggregateInput
  }

  export type athleteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: athleteWhereInput | athleteWhereInput[]
    OR?: athleteWhereInput[]
    NOT?: athleteWhereInput | athleteWhereInput[]
    name?: StringFilter<"athlete"> | string
    surname?: StringFilter<"athlete"> | string
    gender?: Enumathlete_gender_enumFilter<"athlete"> | $Enums.athlete_gender_enum
    height?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    birthdate?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_by?: IntFilter<"athlete"> | number
    updated_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    updated_by?: IntFilter<"athlete"> | number
    users_athlete_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_athlete_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    athlete_competition?: Athlete_competitionListRelationFilter
    athlete_sport?: Athlete_sportListRelationFilter
  }, "id">

  export type athleteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    _count?: athleteCountOrderByAggregateInput
    _avg?: athleteAvgOrderByAggregateInput
    _max?: athleteMaxOrderByAggregateInput
    _min?: athleteMinOrderByAggregateInput
    _sum?: athleteSumOrderByAggregateInput
  }

  export type athleteScalarWhereWithAggregatesInput = {
    AND?: athleteScalarWhereWithAggregatesInput | athleteScalarWhereWithAggregatesInput[]
    OR?: athleteScalarWhereWithAggregatesInput[]
    NOT?: athleteScalarWhereWithAggregatesInput | athleteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"athlete"> | number
    name?: StringWithAggregatesFilter<"athlete"> | string
    surname?: StringWithAggregatesFilter<"athlete"> | string
    gender?: Enumathlete_gender_enumWithAggregatesFilter<"athlete"> | $Enums.athlete_gender_enum
    height?: DecimalNullableWithAggregatesFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableWithAggregatesFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"athlete"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"athlete"> | Date | string | null
    created_by?: IntWithAggregatesFilter<"athlete"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"athlete"> | Date | string | null
    updated_by?: IntWithAggregatesFilter<"athlete"> | number
  }

  export type athlete_competitionWhereInput = {
    AND?: athlete_competitionWhereInput | athlete_competitionWhereInput[]
    OR?: athlete_competitionWhereInput[]
    NOT?: athlete_competitionWhereInput | athlete_competitionWhereInput[]
    id?: IntFilter<"athlete_competition"> | number
    athlete_id?: IntFilter<"athlete_competition"> | number
    competition_id?: IntFilter<"athlete_competition"> | number
    placement?: Enumathlete_competition_placementNullableFilter<"athlete_competition"> | $Enums.athlete_competition_placement | null
    created_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    created_by?: IntFilter<"athlete_competition"> | number
    updated_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    updated_by?: IntFilter<"athlete_competition"> | number
    athlete?: XOR<AthleteScalarRelationFilter, athleteWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    users_athlete_competition_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_athlete_competition_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type athlete_competitionOrderByWithRelationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    placement?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    athlete?: athleteOrderByWithRelationInput
    competition?: competitionOrderByWithRelationInput
    users_athlete_competition_created_byTousers?: usersOrderByWithRelationInput
    users_athlete_competition_updated_byTousers?: usersOrderByWithRelationInput
  }

  export type athlete_competitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    athlete_id_competition_id?: athlete_competitionAthlete_idCompetition_idCompoundUniqueInput
    AND?: athlete_competitionWhereInput | athlete_competitionWhereInput[]
    OR?: athlete_competitionWhereInput[]
    NOT?: athlete_competitionWhereInput | athlete_competitionWhereInput[]
    athlete_id?: IntFilter<"athlete_competition"> | number
    competition_id?: IntFilter<"athlete_competition"> | number
    placement?: Enumathlete_competition_placementNullableFilter<"athlete_competition"> | $Enums.athlete_competition_placement | null
    created_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    created_by?: IntFilter<"athlete_competition"> | number
    updated_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    updated_by?: IntFilter<"athlete_competition"> | number
    athlete?: XOR<AthleteScalarRelationFilter, athleteWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    users_athlete_competition_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_athlete_competition_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "athlete_id_competition_id">

  export type athlete_competitionOrderByWithAggregationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    placement?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    _count?: athlete_competitionCountOrderByAggregateInput
    _avg?: athlete_competitionAvgOrderByAggregateInput
    _max?: athlete_competitionMaxOrderByAggregateInput
    _min?: athlete_competitionMinOrderByAggregateInput
    _sum?: athlete_competitionSumOrderByAggregateInput
  }

  export type athlete_competitionScalarWhereWithAggregatesInput = {
    AND?: athlete_competitionScalarWhereWithAggregatesInput | athlete_competitionScalarWhereWithAggregatesInput[]
    OR?: athlete_competitionScalarWhereWithAggregatesInput[]
    NOT?: athlete_competitionScalarWhereWithAggregatesInput | athlete_competitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"athlete_competition"> | number
    athlete_id?: IntWithAggregatesFilter<"athlete_competition"> | number
    competition_id?: IntWithAggregatesFilter<"athlete_competition"> | number
    placement?: Enumathlete_competition_placementNullableWithAggregatesFilter<"athlete_competition"> | $Enums.athlete_competition_placement | null
    created_at?: DateTimeNullableWithAggregatesFilter<"athlete_competition"> | Date | string | null
    created_by?: IntWithAggregatesFilter<"athlete_competition"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"athlete_competition"> | Date | string | null
    updated_by?: IntWithAggregatesFilter<"athlete_competition"> | number
  }

  export type athlete_sportWhereInput = {
    AND?: athlete_sportWhereInput | athlete_sportWhereInput[]
    OR?: athlete_sportWhereInput[]
    NOT?: athlete_sportWhereInput | athlete_sportWhereInput[]
    id?: IntFilter<"athlete_sport"> | number
    athlete_id?: IntFilter<"athlete_sport"> | number
    sport_id?: IntFilter<"athlete_sport"> | number
    created_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    created_by?: IntFilter<"athlete_sport"> | number
    updated_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    updated_by?: IntFilter<"athlete_sport"> | number
    athlete?: XOR<AthleteScalarRelationFilter, athleteWhereInput>
    users_athlete_sport_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sport?: XOR<SportScalarRelationFilter, sportWhereInput>
    users_athlete_sport_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type athlete_sportOrderByWithRelationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    athlete?: athleteOrderByWithRelationInput
    users_athlete_sport_created_byTousers?: usersOrderByWithRelationInput
    sport?: sportOrderByWithRelationInput
    users_athlete_sport_updated_byTousers?: usersOrderByWithRelationInput
  }

  export type athlete_sportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    athlete_id_sport_id?: athlete_sportAthlete_idSport_idCompoundUniqueInput
    AND?: athlete_sportWhereInput | athlete_sportWhereInput[]
    OR?: athlete_sportWhereInput[]
    NOT?: athlete_sportWhereInput | athlete_sportWhereInput[]
    athlete_id?: IntFilter<"athlete_sport"> | number
    sport_id?: IntFilter<"athlete_sport"> | number
    created_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    created_by?: IntFilter<"athlete_sport"> | number
    updated_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    updated_by?: IntFilter<"athlete_sport"> | number
    athlete?: XOR<AthleteScalarRelationFilter, athleteWhereInput>
    users_athlete_sport_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sport?: XOR<SportScalarRelationFilter, sportWhereInput>
    users_athlete_sport_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "athlete_id_sport_id">

  export type athlete_sportOrderByWithAggregationInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    _count?: athlete_sportCountOrderByAggregateInput
    _avg?: athlete_sportAvgOrderByAggregateInput
    _max?: athlete_sportMaxOrderByAggregateInput
    _min?: athlete_sportMinOrderByAggregateInput
    _sum?: athlete_sportSumOrderByAggregateInput
  }

  export type athlete_sportScalarWhereWithAggregatesInput = {
    AND?: athlete_sportScalarWhereWithAggregatesInput | athlete_sportScalarWhereWithAggregatesInput[]
    OR?: athlete_sportScalarWhereWithAggregatesInput[]
    NOT?: athlete_sportScalarWhereWithAggregatesInput | athlete_sportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"athlete_sport"> | number
    athlete_id?: IntWithAggregatesFilter<"athlete_sport"> | number
    sport_id?: IntWithAggregatesFilter<"athlete_sport"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"athlete_sport"> | Date | string | null
    created_by?: IntWithAggregatesFilter<"athlete_sport"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"athlete_sport"> | Date | string | null
    updated_by?: IntWithAggregatesFilter<"athlete_sport"> | number
  }

  export type competitionWhereInput = {
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    id?: IntFilter<"competition"> | number
    title?: StringFilter<"competition"> | string
    level?: Enumcompetition_levelFilter<"competition"> | $Enums.competition_level
    from_date?: DateTimeFilter<"competition"> | Date | string
    until_date?: DateTimeFilter<"competition"> | Date | string
    created_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    created_by?: IntFilter<"competition"> | number
    updated_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    updated_by?: IntFilter<"competition"> | number
    athlete_competition?: Athlete_competitionListRelationFilter
    users_competition_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_competition_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type competitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    level?: SortOrder
    from_date?: SortOrder
    until_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    athlete_competition?: athlete_competitionOrderByRelationAggregateInput
    users_competition_created_byTousers?: usersOrderByWithRelationInput
    users_competition_updated_byTousers?: usersOrderByWithRelationInput
  }

  export type competitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    title?: StringFilter<"competition"> | string
    level?: Enumcompetition_levelFilter<"competition"> | $Enums.competition_level
    from_date?: DateTimeFilter<"competition"> | Date | string
    until_date?: DateTimeFilter<"competition"> | Date | string
    created_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    created_by?: IntFilter<"competition"> | number
    updated_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    updated_by?: IntFilter<"competition"> | number
    athlete_competition?: Athlete_competitionListRelationFilter
    users_competition_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_competition_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type competitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    level?: SortOrder
    from_date?: SortOrder
    until_date?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    _count?: competitionCountOrderByAggregateInput
    _avg?: competitionAvgOrderByAggregateInput
    _max?: competitionMaxOrderByAggregateInput
    _min?: competitionMinOrderByAggregateInput
    _sum?: competitionSumOrderByAggregateInput
  }

  export type competitionScalarWhereWithAggregatesInput = {
    AND?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    OR?: competitionScalarWhereWithAggregatesInput[]
    NOT?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"competition"> | number
    title?: StringWithAggregatesFilter<"competition"> | string
    level?: Enumcompetition_levelWithAggregatesFilter<"competition"> | $Enums.competition_level
    from_date?: DateTimeWithAggregatesFilter<"competition"> | Date | string
    until_date?: DateTimeWithAggregatesFilter<"competition"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"competition"> | Date | string | null
    created_by?: IntWithAggregatesFilter<"competition"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"competition"> | Date | string | null
    updated_by?: IntWithAggregatesFilter<"competition"> | number
  }

  export type sportWhereInput = {
    AND?: sportWhereInput | sportWhereInput[]
    OR?: sportWhereInput[]
    NOT?: sportWhereInput | sportWhereInput[]
    id?: IntFilter<"sport"> | number
    name?: StringFilter<"sport"> | string
    created_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    created_by?: IntFilter<"sport"> | number
    updated_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    updated_by?: IntFilter<"sport"> | number
    athlete_sport?: Athlete_sportListRelationFilter
    users_sport_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_sport_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    athlete_sport?: athlete_sportOrderByRelationAggregateInput
    users_sport_created_byTousers?: usersOrderByWithRelationInput
    users_sport_updated_byTousers?: usersOrderByWithRelationInput
  }

  export type sportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: sportWhereInput | sportWhereInput[]
    OR?: sportWhereInput[]
    NOT?: sportWhereInput | sportWhereInput[]
    created_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    created_by?: IntFilter<"sport"> | number
    updated_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    updated_by?: IntFilter<"sport"> | number
    athlete_sport?: Athlete_sportListRelationFilter
    users_sport_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_sport_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "name">

  export type sportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    _count?: sportCountOrderByAggregateInput
    _avg?: sportAvgOrderByAggregateInput
    _max?: sportMaxOrderByAggregateInput
    _min?: sportMinOrderByAggregateInput
    _sum?: sportSumOrderByAggregateInput
  }

  export type sportScalarWhereWithAggregatesInput = {
    AND?: sportScalarWhereWithAggregatesInput | sportScalarWhereWithAggregatesInput[]
    OR?: sportScalarWhereWithAggregatesInput[]
    NOT?: sportScalarWhereWithAggregatesInput | sportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sport"> | number
    name?: StringWithAggregatesFilter<"sport"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"sport"> | Date | string | null
    created_by?: IntWithAggregatesFilter<"sport"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"sport"> | Date | string | null
    updated_by?: IntWithAggregatesFilter<"sport"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    surname?: StringFilter<"users"> | string
    user_role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    email?: StringFilter<"users"> | string
    email_verified?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    athlete_athlete_created_byTousers?: AthleteListRelationFilter
    athlete_athlete_updated_byTousers?: AthleteListRelationFilter
    athlete_competition_athlete_competition_created_byTousers?: Athlete_competitionListRelationFilter
    athlete_competition_athlete_competition_updated_byTousers?: Athlete_competitionListRelationFilter
    athlete_sport_athlete_sport_created_byTousers?: Athlete_sportListRelationFilter
    athlete_sport_athlete_sport_updated_byTousers?: Athlete_sportListRelationFilter
    competition_competition_created_byTousers?: CompetitionListRelationFilter
    competition_competition_updated_byTousers?: CompetitionListRelationFilter
    sport_sport_created_byTousers?: SportListRelationFilter
    sport_sport_updated_byTousers?: SportListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    user_role?: SortOrderInput | SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    athlete_athlete_created_byTousers?: athleteOrderByRelationAggregateInput
    athlete_athlete_updated_byTousers?: athleteOrderByRelationAggregateInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionOrderByRelationAggregateInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionOrderByRelationAggregateInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportOrderByRelationAggregateInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportOrderByRelationAggregateInput
    competition_competition_created_byTousers?: competitionOrderByRelationAggregateInput
    competition_competition_updated_byTousers?: competitionOrderByRelationAggregateInput
    sport_sport_created_byTousers?: sportOrderByRelationAggregateInput
    sport_sport_updated_byTousers?: sportOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    surname?: StringFilter<"users"> | string
    user_role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    email_verified?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    athlete_athlete_created_byTousers?: AthleteListRelationFilter
    athlete_athlete_updated_byTousers?: AthleteListRelationFilter
    athlete_competition_athlete_competition_created_byTousers?: Athlete_competitionListRelationFilter
    athlete_competition_athlete_competition_updated_byTousers?: Athlete_competitionListRelationFilter
    athlete_sport_athlete_sport_created_byTousers?: Athlete_sportListRelationFilter
    athlete_sport_athlete_sport_updated_byTousers?: Athlete_sportListRelationFilter
    competition_competition_created_byTousers?: CompetitionListRelationFilter
    competition_competition_updated_byTousers?: CompetitionListRelationFilter
    sport_sport_created_byTousers?: SportListRelationFilter
    sport_sport_updated_byTousers?: SportListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    user_role?: SortOrderInput | SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    surname?: StringWithAggregatesFilter<"users"> | string
    user_role?: Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null
    email?: StringWithAggregatesFilter<"users"> | string
    email_verified?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type athleteCreateInput = {
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_created_byTousers: usersCreateNestedOneWithoutAthlete_athlete_created_byTousersInput
    users_athlete_updated_byTousers: usersCreateNestedOneWithoutAthlete_athlete_updated_byTousersInput
    athlete_competition?: athlete_competitionCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportCreateNestedManyWithoutAthleteInput
  }

  export type athleteUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athleteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_created_byTousersNestedInput
    users_athlete_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_updated_byTousersNestedInput
    athlete_competition?: athlete_competitionUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type athleteCreateManyInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athleteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athleteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionCreateInput = {
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_competitionInput
    competition: competitionCreateNestedOneWithoutAthlete_competitionInput
    users_athlete_competition_created_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_created_byTousersInput
    users_athlete_competition_updated_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_updated_byTousersInput
  }

  export type athlete_competitionUncheckedCreateInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionUpdateInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_competitionNestedInput
    competition?: competitionUpdateOneRequiredWithoutAthlete_competitionNestedInput
    users_athlete_competition_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_created_byTousersNestedInput
    users_athlete_competition_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_updated_byTousersNestedInput
  }

  export type athlete_competitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionCreateManyInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionUpdateManyMutationInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_competitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_created_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_created_byTousersInput
    sport: sportCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_updated_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_updated_byTousersInput
  }

  export type athlete_sportUncheckedCreateInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_created_byTousersNestedInput
    sport?: sportUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_updated_byTousersNestedInput
  }

  export type athlete_sportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportCreateManyInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_sportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type competitionCreateInput = {
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_competition?: athlete_competitionCreateNestedManyWithoutCompetitionInput
    users_competition_created_byTousers: usersCreateNestedOneWithoutCompetition_competition_created_byTousersInput
    users_competition_updated_byTousers: usersCreateNestedOneWithoutCompetition_competition_updated_byTousersInput
  }

  export type competitionUncheckedCreateInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_competition?: athlete_competitionUpdateManyWithoutCompetitionNestedInput
    users_competition_created_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_created_byTousersNestedInput
    users_competition_updated_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_updated_byTousersNestedInput
  }

  export type competitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionCreateManyInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type competitionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type sportCreateInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_sport?: athlete_sportCreateNestedManyWithoutSportInput
    users_sport_created_byTousers: usersCreateNestedOneWithoutSport_sport_created_byTousersInput
    users_sport_updated_byTousers: usersCreateNestedOneWithoutSport_sport_updated_byTousersInput
  }

  export type sportUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutSportInput
  }

  export type sportUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_sport?: athlete_sportUpdateManyWithoutSportNestedInput
    users_sport_created_byTousers?: usersUpdateOneRequiredWithoutSport_sport_created_byTousersNestedInput
    users_sport_updated_byTousers?: usersUpdateOneRequiredWithoutSport_sport_updated_byTousersNestedInput
  }

  export type sportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type sportCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type sportUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumathlete_gender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_gender_enum | Enumathlete_gender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumathlete_gender_enumFilter<$PrismaModel> | $Enums.athlete_gender_enum
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Athlete_competitionListRelationFilter = {
    every?: athlete_competitionWhereInput
    some?: athlete_competitionWhereInput
    none?: athlete_competitionWhereInput
  }

  export type Athlete_sportListRelationFilter = {
    every?: athlete_sportWhereInput
    some?: athlete_sportWhereInput
    none?: athlete_sportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type athlete_competitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type athlete_sportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type athleteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athleteAvgOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type athleteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athleteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    birthdate?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athleteSumOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumathlete_gender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_gender_enum | Enumathlete_gender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumathlete_gender_enumWithAggregatesFilter<$PrismaModel> | $Enums.athlete_gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumathlete_gender_enumFilter<$PrismaModel>
    _max?: NestedEnumathlete_gender_enumFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumathlete_competition_placementNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_competition_placement | Enumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    in?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel> | $Enums.athlete_competition_placement | null
  }

  export type AthleteScalarRelationFilter = {
    is?: athleteWhereInput
    isNot?: athleteWhereInput
  }

  export type CompetitionScalarRelationFilter = {
    is?: competitionWhereInput
    isNot?: competitionWhereInput
  }

  export type athlete_competitionAthlete_idCompetition_idCompoundUniqueInput = {
    athlete_id: number
    competition_id: number
  }

  export type athlete_competitionCountOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    placement?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_competitionAvgOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_competitionMaxOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    placement?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_competitionMinOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    placement?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_competitionSumOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    competition_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type Enumathlete_competition_placementNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_competition_placement | Enumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    in?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumathlete_competition_placementNullableWithAggregatesFilter<$PrismaModel> | $Enums.athlete_competition_placement | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel>
    _max?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel>
  }

  export type SportScalarRelationFilter = {
    is?: sportWhereInput
    isNot?: sportWhereInput
  }

  export type athlete_sportAthlete_idSport_idCompoundUniqueInput = {
    athlete_id: number
    sport_id: number
  }

  export type athlete_sportCountOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_sportAvgOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_sportMaxOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_sportMinOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type athlete_sportSumOrderByAggregateInput = {
    id?: SortOrder
    athlete_id?: SortOrder
    sport_id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type Enumcompetition_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.competition_level | Enumcompetition_levelFieldRefInput<$PrismaModel>
    in?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumcompetition_levelFilter<$PrismaModel> | $Enums.competition_level
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type competitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    level?: SortOrder
    from_date?: SortOrder
    until_date?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type competitionAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type competitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    level?: SortOrder
    from_date?: SortOrder
    until_date?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type competitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    level?: SortOrder
    from_date?: SortOrder
    until_date?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type competitionSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type Enumcompetition_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.competition_level | Enumcompetition_levelFieldRefInput<$PrismaModel>
    in?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumcompetition_levelWithAggregatesFilter<$PrismaModel> | $Enums.competition_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcompetition_levelFilter<$PrismaModel>
    _max?: NestedEnumcompetition_levelFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type sportAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type sportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type sportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
  }

  export type sportSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type Enumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AthleteListRelationFilter = {
    every?: athleteWhereInput
    some?: athleteWhereInput
    none?: athleteWhereInput
  }

  export type CompetitionListRelationFilter = {
    every?: competitionWhereInput
    some?: competitionWhereInput
    none?: competitionWhereInput
  }

  export type SportListRelationFilter = {
    every?: sportWhereInput
    some?: sportWhereInput
    none?: sportWhereInput
  }

  export type athleteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type competitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAthlete_athlete_created_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_athlete_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAthlete_athlete_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_athlete_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type athlete_competitionCreateNestedManyWithoutAthleteInput = {
    create?: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput> | athlete_competitionCreateWithoutAthleteInput[] | athlete_competitionUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutAthleteInput | athlete_competitionCreateOrConnectWithoutAthleteInput[]
    createMany?: athlete_competitionCreateManyAthleteInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_sportCreateNestedManyWithoutAthleteInput = {
    create?: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput> | athlete_sportCreateWithoutAthleteInput[] | athlete_sportUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutAthleteInput | athlete_sportCreateOrConnectWithoutAthleteInput[]
    createMany?: athlete_sportCreateManyAthleteInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type athlete_competitionUncheckedCreateNestedManyWithoutAthleteInput = {
    create?: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput> | athlete_competitionCreateWithoutAthleteInput[] | athlete_competitionUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutAthleteInput | athlete_competitionCreateOrConnectWithoutAthleteInput[]
    createMany?: athlete_competitionCreateManyAthleteInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_sportUncheckedCreateNestedManyWithoutAthleteInput = {
    create?: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput> | athlete_sportCreateWithoutAthleteInput[] | athlete_sportUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutAthleteInput | athlete_sportCreateOrConnectWithoutAthleteInput[]
    createMany?: athlete_sportCreateManyAthleteInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumathlete_gender_enumFieldUpdateOperationsInput = {
    set?: $Enums.athlete_gender_enum
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutAthlete_athlete_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_athlete_created_byTousersInput
    upsert?: usersUpsertWithoutAthlete_athlete_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_athlete_created_byTousersInput, usersUpdateWithoutAthlete_athlete_created_byTousersInput>, usersUncheckedUpdateWithoutAthlete_athlete_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutAthlete_athlete_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_athlete_updated_byTousersInput
    upsert?: usersUpsertWithoutAthlete_athlete_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_athlete_updated_byTousersInput, usersUpdateWithoutAthlete_athlete_updated_byTousersInput>, usersUncheckedUpdateWithoutAthlete_athlete_updated_byTousersInput>
  }

  export type athlete_competitionUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput> | athlete_competitionCreateWithoutAthleteInput[] | athlete_competitionUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutAthleteInput | athlete_competitionCreateOrConnectWithoutAthleteInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutAthleteInput | athlete_competitionUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: athlete_competitionCreateManyAthleteInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutAthleteInput | athlete_competitionUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutAthleteInput | athlete_competitionUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_sportUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput> | athlete_sportCreateWithoutAthleteInput[] | athlete_sportUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutAthleteInput | athlete_sportCreateOrConnectWithoutAthleteInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutAthleteInput | athlete_sportUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: athlete_sportCreateManyAthleteInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutAthleteInput | athlete_sportUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutAthleteInput | athlete_sportUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type athlete_competitionUncheckedUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput> | athlete_competitionCreateWithoutAthleteInput[] | athlete_competitionUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutAthleteInput | athlete_competitionCreateOrConnectWithoutAthleteInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutAthleteInput | athlete_competitionUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: athlete_competitionCreateManyAthleteInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutAthleteInput | athlete_competitionUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutAthleteInput | athlete_competitionUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_sportUncheckedUpdateManyWithoutAthleteNestedInput = {
    create?: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput> | athlete_sportCreateWithoutAthleteInput[] | athlete_sportUncheckedCreateWithoutAthleteInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutAthleteInput | athlete_sportCreateOrConnectWithoutAthleteInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutAthleteInput | athlete_sportUpsertWithWhereUniqueWithoutAthleteInput[]
    createMany?: athlete_sportCreateManyAthleteInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutAthleteInput | athlete_sportUpdateWithWhereUniqueWithoutAthleteInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutAthleteInput | athlete_sportUpdateManyWithWhereWithoutAthleteInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type athleteCreateNestedOneWithoutAthlete_competitionInput = {
    create?: XOR<athleteCreateWithoutAthlete_competitionInput, athleteUncheckedCreateWithoutAthlete_competitionInput>
    connectOrCreate?: athleteCreateOrConnectWithoutAthlete_competitionInput
    connect?: athleteWhereUniqueInput
  }

  export type competitionCreateNestedOneWithoutAthlete_competitionInput = {
    create?: XOR<competitionCreateWithoutAthlete_competitionInput, competitionUncheckedCreateWithoutAthlete_competitionInput>
    connectOrCreate?: competitionCreateOrConnectWithoutAthlete_competitionInput
    connect?: competitionWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_competition_athlete_competition_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_competition_athlete_competition_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableEnumathlete_competition_placementFieldUpdateOperationsInput = {
    set?: $Enums.athlete_competition_placement | null
  }

  export type athleteUpdateOneRequiredWithoutAthlete_competitionNestedInput = {
    create?: XOR<athleteCreateWithoutAthlete_competitionInput, athleteUncheckedCreateWithoutAthlete_competitionInput>
    connectOrCreate?: athleteCreateOrConnectWithoutAthlete_competitionInput
    upsert?: athleteUpsertWithoutAthlete_competitionInput
    connect?: athleteWhereUniqueInput
    update?: XOR<XOR<athleteUpdateToOneWithWhereWithoutAthlete_competitionInput, athleteUpdateWithoutAthlete_competitionInput>, athleteUncheckedUpdateWithoutAthlete_competitionInput>
  }

  export type competitionUpdateOneRequiredWithoutAthlete_competitionNestedInput = {
    create?: XOR<competitionCreateWithoutAthlete_competitionInput, competitionUncheckedCreateWithoutAthlete_competitionInput>
    connectOrCreate?: competitionCreateOrConnectWithoutAthlete_competitionInput
    upsert?: competitionUpsertWithoutAthlete_competitionInput
    connect?: competitionWhereUniqueInput
    update?: XOR<XOR<competitionUpdateToOneWithWhereWithoutAthlete_competitionInput, competitionUpdateWithoutAthlete_competitionInput>, competitionUncheckedUpdateWithoutAthlete_competitionInput>
  }

  export type usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_competition_athlete_competition_created_byTousersInput
    upsert?: usersUpsertWithoutAthlete_competition_athlete_competition_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput>, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_competition_athlete_competition_updated_byTousersInput
    upsert?: usersUpsertWithoutAthlete_competition_athlete_competition_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
  }

  export type athleteCreateNestedOneWithoutAthlete_sportInput = {
    create?: XOR<athleteCreateWithoutAthlete_sportInput, athleteUncheckedCreateWithoutAthlete_sportInput>
    connectOrCreate?: athleteCreateOrConnectWithoutAthlete_sportInput
    connect?: athleteWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_sport_athlete_sport_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type sportCreateNestedOneWithoutAthlete_sportInput = {
    create?: XOR<sportCreateWithoutAthlete_sportInput, sportUncheckedCreateWithoutAthlete_sportInput>
    connectOrCreate?: sportCreateOrConnectWithoutAthlete_sportInput
    connect?: sportWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_sport_athlete_sport_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type athleteUpdateOneRequiredWithoutAthlete_sportNestedInput = {
    create?: XOR<athleteCreateWithoutAthlete_sportInput, athleteUncheckedCreateWithoutAthlete_sportInput>
    connectOrCreate?: athleteCreateOrConnectWithoutAthlete_sportInput
    upsert?: athleteUpsertWithoutAthlete_sportInput
    connect?: athleteWhereUniqueInput
    update?: XOR<XOR<athleteUpdateToOneWithWhereWithoutAthlete_sportInput, athleteUpdateWithoutAthlete_sportInput>, athleteUncheckedUpdateWithoutAthlete_sportInput>
  }

  export type usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_sport_athlete_sport_created_byTousersInput
    upsert?: usersUpsertWithoutAthlete_sport_athlete_sport_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput>, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
  }

  export type sportUpdateOneRequiredWithoutAthlete_sportNestedInput = {
    create?: XOR<sportCreateWithoutAthlete_sportInput, sportUncheckedCreateWithoutAthlete_sportInput>
    connectOrCreate?: sportCreateOrConnectWithoutAthlete_sportInput
    upsert?: sportUpsertWithoutAthlete_sportInput
    connect?: sportWhereUniqueInput
    update?: XOR<XOR<sportUpdateToOneWithWhereWithoutAthlete_sportInput, sportUpdateWithoutAthlete_sportInput>, sportUncheckedUpdateWithoutAthlete_sportInput>
  }

  export type usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAthlete_sport_athlete_sport_updated_byTousersInput
    upsert?: usersUpsertWithoutAthlete_sport_athlete_sport_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
  }

  export type athlete_competitionCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput> | athlete_competitionCreateWithoutCompetitionInput[] | athlete_competitionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutCompetitionInput | athlete_competitionCreateOrConnectWithoutCompetitionInput[]
    createMany?: athlete_competitionCreateManyCompetitionInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCompetition_competition_created_byTousersInput = {
    create?: XOR<usersCreateWithoutCompetition_competition_created_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompetition_competition_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCompetition_competition_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompetition_competition_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type athlete_competitionUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput> | athlete_competitionCreateWithoutCompetitionInput[] | athlete_competitionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutCompetitionInput | athlete_competitionCreateOrConnectWithoutCompetitionInput[]
    createMany?: athlete_competitionCreateManyCompetitionInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type Enumcompetition_levelFieldUpdateOperationsInput = {
    set?: $Enums.competition_level
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type athlete_competitionUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput> | athlete_competitionCreateWithoutCompetitionInput[] | athlete_competitionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutCompetitionInput | athlete_competitionCreateOrConnectWithoutCompetitionInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutCompetitionInput | athlete_competitionUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: athlete_competitionCreateManyCompetitionInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutCompetitionInput | athlete_competitionUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutCompetitionInput | athlete_competitionUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCompetition_competition_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCompetition_competition_created_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompetition_competition_created_byTousersInput
    upsert?: usersUpsertWithoutCompetition_competition_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCompetition_competition_created_byTousersInput, usersUpdateWithoutCompetition_competition_created_byTousersInput>, usersUncheckedUpdateWithoutCompetition_competition_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutCompetition_competition_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCompetition_competition_updated_byTousersInput
    upsert?: usersUpsertWithoutCompetition_competition_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCompetition_competition_updated_byTousersInput, usersUpdateWithoutCompetition_competition_updated_byTousersInput>, usersUncheckedUpdateWithoutCompetition_competition_updated_byTousersInput>
  }

  export type athlete_competitionUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput> | athlete_competitionCreateWithoutCompetitionInput[] | athlete_competitionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutCompetitionInput | athlete_competitionCreateOrConnectWithoutCompetitionInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutCompetitionInput | athlete_competitionUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: athlete_competitionCreateManyCompetitionInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutCompetitionInput | athlete_competitionUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutCompetitionInput | athlete_competitionUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_sportCreateNestedManyWithoutSportInput = {
    create?: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput> | athlete_sportCreateWithoutSportInput[] | athlete_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutSportInput | athlete_sportCreateOrConnectWithoutSportInput[]
    createMany?: athlete_sportCreateManySportInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSport_sport_created_byTousersInput = {
    create?: XOR<usersCreateWithoutSport_sport_created_byTousersInput, usersUncheckedCreateWithoutSport_sport_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSport_sport_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSport_sport_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutSport_sport_updated_byTousersInput, usersUncheckedCreateWithoutSport_sport_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSport_sport_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type athlete_sportUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput> | athlete_sportCreateWithoutSportInput[] | athlete_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutSportInput | athlete_sportCreateOrConnectWithoutSportInput[]
    createMany?: athlete_sportCreateManySportInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type athlete_sportUpdateManyWithoutSportNestedInput = {
    create?: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput> | athlete_sportCreateWithoutSportInput[] | athlete_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutSportInput | athlete_sportCreateOrConnectWithoutSportInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutSportInput | athlete_sportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: athlete_sportCreateManySportInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutSportInput | athlete_sportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutSportInput | athlete_sportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSport_sport_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutSport_sport_created_byTousersInput, usersUncheckedCreateWithoutSport_sport_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSport_sport_created_byTousersInput
    upsert?: usersUpsertWithoutSport_sport_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSport_sport_created_byTousersInput, usersUpdateWithoutSport_sport_created_byTousersInput>, usersUncheckedUpdateWithoutSport_sport_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutSport_sport_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutSport_sport_updated_byTousersInput, usersUncheckedCreateWithoutSport_sport_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSport_sport_updated_byTousersInput
    upsert?: usersUpsertWithoutSport_sport_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSport_sport_updated_byTousersInput, usersUpdateWithoutSport_sport_updated_byTousersInput>, usersUncheckedUpdateWithoutSport_sport_updated_byTousersInput>
  }

  export type athlete_sportUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput> | athlete_sportCreateWithoutSportInput[] | athlete_sportUncheckedCreateWithoutSportInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutSportInput | athlete_sportCreateOrConnectWithoutSportInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutSportInput | athlete_sportUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: athlete_sportCreateManySportInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutSportInput | athlete_sportUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutSportInput | athlete_sportUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput> | athleteCreateWithoutUsers_athlete_created_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_created_byTousersInputEnvelope
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
  }

  export type athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput> | athleteCreateWithoutUsers_athlete_updated_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_updated_byTousersInputEnvelope
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
  }

  export type athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_created_byTousersInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput> | competitionCreateWithoutUsers_competition_created_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_created_byTousersInputEnvelope
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
  }

  export type competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput> | competitionCreateWithoutUsers_competition_updated_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_updated_byTousersInputEnvelope
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
  }

  export type sportCreateNestedManyWithoutUsers_sport_created_byTousersInput = {
    create?: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput> | sportCreateWithoutUsers_sport_created_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_created_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_created_byTousersInput | sportCreateOrConnectWithoutUsers_sport_created_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_created_byTousersInputEnvelope
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
  }

  export type sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput = {
    create?: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput> | sportCreateWithoutUsers_sport_updated_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput | sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_updated_byTousersInputEnvelope
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
  }

  export type athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput> | athleteCreateWithoutUsers_athlete_created_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_created_byTousersInputEnvelope
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
  }

  export type athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput> | athleteCreateWithoutUsers_athlete_updated_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_updated_byTousersInputEnvelope
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
  }

  export type athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInputEnvelope
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
  }

  export type athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_created_byTousersInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInputEnvelope
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
  }

  export type competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput> | competitionCreateWithoutUsers_competition_created_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_created_byTousersInputEnvelope
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
  }

  export type competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput> | competitionCreateWithoutUsers_competition_updated_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_updated_byTousersInputEnvelope
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
  }

  export type sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput = {
    create?: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput> | sportCreateWithoutUsers_sport_created_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_created_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_created_byTousersInput | sportCreateOrConnectWithoutUsers_sport_created_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_created_byTousersInputEnvelope
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
  }

  export type sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput = {
    create?: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput> | sportCreateWithoutUsers_sport_updated_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput | sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_updated_byTousersInputEnvelope
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput> | athleteCreateWithoutUsers_athlete_created_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput[]
    upsert?: athleteUpsertWithWhereUniqueWithoutUsers_athlete_created_byTousersInput | athleteUpsertWithWhereUniqueWithoutUsers_athlete_created_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_created_byTousersInputEnvelope
    set?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    disconnect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    delete?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    update?: athleteUpdateWithWhereUniqueWithoutUsers_athlete_created_byTousersInput | athleteUpdateWithWhereUniqueWithoutUsers_athlete_created_byTousersInput[]
    updateMany?: athleteUpdateManyWithWhereWithoutUsers_athlete_created_byTousersInput | athleteUpdateManyWithWhereWithoutUsers_athlete_created_byTousersInput[]
    deleteMany?: athleteScalarWhereInput | athleteScalarWhereInput[]
  }

  export type athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput> | athleteCreateWithoutUsers_athlete_updated_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput[]
    upsert?: athleteUpsertWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput | athleteUpsertWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_updated_byTousersInputEnvelope
    set?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    disconnect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    delete?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    update?: athleteUpdateWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput | athleteUpdateWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput[]
    updateMany?: athleteUpdateManyWithWhereWithoutUsers_athlete_updated_byTousersInput | athleteUpdateManyWithWhereWithoutUsers_athlete_updated_byTousersInput[]
    deleteMany?: athleteScalarWhereInput | athleteScalarWhereInput[]
  }

  export type athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_created_byTousersInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_updated_byTousersInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_created_byTousersInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_created_byTousersInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_updated_byTousersInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput> | competitionCreateWithoutUsers_competition_created_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput[]
    upsert?: competitionUpsertWithWhereUniqueWithoutUsers_competition_created_byTousersInput | competitionUpsertWithWhereUniqueWithoutUsers_competition_created_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_created_byTousersInputEnvelope
    set?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    disconnect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    delete?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    update?: competitionUpdateWithWhereUniqueWithoutUsers_competition_created_byTousersInput | competitionUpdateWithWhereUniqueWithoutUsers_competition_created_byTousersInput[]
    updateMany?: competitionUpdateManyWithWhereWithoutUsers_competition_created_byTousersInput | competitionUpdateManyWithWhereWithoutUsers_competition_created_byTousersInput[]
    deleteMany?: competitionScalarWhereInput | competitionScalarWhereInput[]
  }

  export type competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput> | competitionCreateWithoutUsers_competition_updated_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput[]
    upsert?: competitionUpsertWithWhereUniqueWithoutUsers_competition_updated_byTousersInput | competitionUpsertWithWhereUniqueWithoutUsers_competition_updated_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_updated_byTousersInputEnvelope
    set?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    disconnect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    delete?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    update?: competitionUpdateWithWhereUniqueWithoutUsers_competition_updated_byTousersInput | competitionUpdateWithWhereUniqueWithoutUsers_competition_updated_byTousersInput[]
    updateMany?: competitionUpdateManyWithWhereWithoutUsers_competition_updated_byTousersInput | competitionUpdateManyWithWhereWithoutUsers_competition_updated_byTousersInput[]
    deleteMany?: competitionScalarWhereInput | competitionScalarWhereInput[]
  }

  export type sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput = {
    create?: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput> | sportCreateWithoutUsers_sport_created_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_created_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_created_byTousersInput | sportCreateOrConnectWithoutUsers_sport_created_byTousersInput[]
    upsert?: sportUpsertWithWhereUniqueWithoutUsers_sport_created_byTousersInput | sportUpsertWithWhereUniqueWithoutUsers_sport_created_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_created_byTousersInputEnvelope
    set?: sportWhereUniqueInput | sportWhereUniqueInput[]
    disconnect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    delete?: sportWhereUniqueInput | sportWhereUniqueInput[]
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    update?: sportUpdateWithWhereUniqueWithoutUsers_sport_created_byTousersInput | sportUpdateWithWhereUniqueWithoutUsers_sport_created_byTousersInput[]
    updateMany?: sportUpdateManyWithWhereWithoutUsers_sport_created_byTousersInput | sportUpdateManyWithWhereWithoutUsers_sport_created_byTousersInput[]
    deleteMany?: sportScalarWhereInput | sportScalarWhereInput[]
  }

  export type sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput = {
    create?: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput> | sportCreateWithoutUsers_sport_updated_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput | sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput[]
    upsert?: sportUpsertWithWhereUniqueWithoutUsers_sport_updated_byTousersInput | sportUpsertWithWhereUniqueWithoutUsers_sport_updated_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_updated_byTousersInputEnvelope
    set?: sportWhereUniqueInput | sportWhereUniqueInput[]
    disconnect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    delete?: sportWhereUniqueInput | sportWhereUniqueInput[]
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    update?: sportUpdateWithWhereUniqueWithoutUsers_sport_updated_byTousersInput | sportUpdateWithWhereUniqueWithoutUsers_sport_updated_byTousersInput[]
    updateMany?: sportUpdateManyWithWhereWithoutUsers_sport_updated_byTousersInput | sportUpdateManyWithWhereWithoutUsers_sport_updated_byTousersInput[]
    deleteMany?: sportScalarWhereInput | sportScalarWhereInput[]
  }

  export type athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput> | athleteCreateWithoutUsers_athlete_created_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput[]
    upsert?: athleteUpsertWithWhereUniqueWithoutUsers_athlete_created_byTousersInput | athleteUpsertWithWhereUniqueWithoutUsers_athlete_created_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_created_byTousersInputEnvelope
    set?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    disconnect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    delete?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    update?: athleteUpdateWithWhereUniqueWithoutUsers_athlete_created_byTousersInput | athleteUpdateWithWhereUniqueWithoutUsers_athlete_created_byTousersInput[]
    updateMany?: athleteUpdateManyWithWhereWithoutUsers_athlete_created_byTousersInput | athleteUpdateManyWithWhereWithoutUsers_athlete_created_byTousersInput[]
    deleteMany?: athleteScalarWhereInput | athleteScalarWhereInput[]
  }

  export type athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput = {
    create?: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput> | athleteCreateWithoutUsers_athlete_updated_byTousersInput[] | athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput[]
    connectOrCreate?: athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput | athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput[]
    upsert?: athleteUpsertWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput | athleteUpsertWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput[]
    createMany?: athleteCreateManyUsers_athlete_updated_byTousersInputEnvelope
    set?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    disconnect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    delete?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    connect?: athleteWhereUniqueInput | athleteWhereUniqueInput[]
    update?: athleteUpdateWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput | athleteUpdateWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput[]
    updateMany?: athleteUpdateManyWithWhereWithoutUsers_athlete_updated_byTousersInput | athleteUpdateManyWithWhereWithoutUsers_athlete_updated_byTousersInput[]
    deleteMany?: athleteScalarWhereInput | athleteScalarWhereInput[]
  }

  export type athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_created_byTousersInput | athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_created_byTousersInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput = {
    create?: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput> | athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput[] | athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput[]
    connectOrCreate?: athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput[]
    upsert?: athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput[]
    createMany?: athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInputEnvelope
    set?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    disconnect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    delete?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    connect?: athlete_competitionWhereUniqueInput | athlete_competitionWhereUniqueInput[]
    update?: athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput[]
    updateMany?: athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_updated_byTousersInput | athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_updated_byTousersInput[]
    deleteMany?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
  }

  export type athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_created_byTousersInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_created_byTousersInput | athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_created_byTousersInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput = {
    create?: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput> | athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput[] | athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput[]
    connectOrCreate?: athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput[]
    upsert?: athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput[]
    createMany?: athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInputEnvelope
    set?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    disconnect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    delete?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    connect?: athlete_sportWhereUniqueInput | athlete_sportWhereUniqueInput[]
    update?: athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput[]
    updateMany?: athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_updated_byTousersInput | athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_updated_byTousersInput[]
    deleteMany?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
  }

  export type competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput> | competitionCreateWithoutUsers_competition_created_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput[]
    upsert?: competitionUpsertWithWhereUniqueWithoutUsers_competition_created_byTousersInput | competitionUpsertWithWhereUniqueWithoutUsers_competition_created_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_created_byTousersInputEnvelope
    set?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    disconnect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    delete?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    update?: competitionUpdateWithWhereUniqueWithoutUsers_competition_created_byTousersInput | competitionUpdateWithWhereUniqueWithoutUsers_competition_created_byTousersInput[]
    updateMany?: competitionUpdateManyWithWhereWithoutUsers_competition_created_byTousersInput | competitionUpdateManyWithWhereWithoutUsers_competition_created_byTousersInput[]
    deleteMany?: competitionScalarWhereInput | competitionScalarWhereInput[]
  }

  export type competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput = {
    create?: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput> | competitionCreateWithoutUsers_competition_updated_byTousersInput[] | competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput[]
    connectOrCreate?: competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput | competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput[]
    upsert?: competitionUpsertWithWhereUniqueWithoutUsers_competition_updated_byTousersInput | competitionUpsertWithWhereUniqueWithoutUsers_competition_updated_byTousersInput[]
    createMany?: competitionCreateManyUsers_competition_updated_byTousersInputEnvelope
    set?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    disconnect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    delete?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    connect?: competitionWhereUniqueInput | competitionWhereUniqueInput[]
    update?: competitionUpdateWithWhereUniqueWithoutUsers_competition_updated_byTousersInput | competitionUpdateWithWhereUniqueWithoutUsers_competition_updated_byTousersInput[]
    updateMany?: competitionUpdateManyWithWhereWithoutUsers_competition_updated_byTousersInput | competitionUpdateManyWithWhereWithoutUsers_competition_updated_byTousersInput[]
    deleteMany?: competitionScalarWhereInput | competitionScalarWhereInput[]
  }

  export type sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput = {
    create?: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput> | sportCreateWithoutUsers_sport_created_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_created_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_created_byTousersInput | sportCreateOrConnectWithoutUsers_sport_created_byTousersInput[]
    upsert?: sportUpsertWithWhereUniqueWithoutUsers_sport_created_byTousersInput | sportUpsertWithWhereUniqueWithoutUsers_sport_created_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_created_byTousersInputEnvelope
    set?: sportWhereUniqueInput | sportWhereUniqueInput[]
    disconnect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    delete?: sportWhereUniqueInput | sportWhereUniqueInput[]
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    update?: sportUpdateWithWhereUniqueWithoutUsers_sport_created_byTousersInput | sportUpdateWithWhereUniqueWithoutUsers_sport_created_byTousersInput[]
    updateMany?: sportUpdateManyWithWhereWithoutUsers_sport_created_byTousersInput | sportUpdateManyWithWhereWithoutUsers_sport_created_byTousersInput[]
    deleteMany?: sportScalarWhereInput | sportScalarWhereInput[]
  }

  export type sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput = {
    create?: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput> | sportCreateWithoutUsers_sport_updated_byTousersInput[] | sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput[]
    connectOrCreate?: sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput | sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput[]
    upsert?: sportUpsertWithWhereUniqueWithoutUsers_sport_updated_byTousersInput | sportUpsertWithWhereUniqueWithoutUsers_sport_updated_byTousersInput[]
    createMany?: sportCreateManyUsers_sport_updated_byTousersInputEnvelope
    set?: sportWhereUniqueInput | sportWhereUniqueInput[]
    disconnect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    delete?: sportWhereUniqueInput | sportWhereUniqueInput[]
    connect?: sportWhereUniqueInput | sportWhereUniqueInput[]
    update?: sportUpdateWithWhereUniqueWithoutUsers_sport_updated_byTousersInput | sportUpdateWithWhereUniqueWithoutUsers_sport_updated_byTousersInput[]
    updateMany?: sportUpdateManyWithWhereWithoutUsers_sport_updated_byTousersInput | sportUpdateManyWithWhereWithoutUsers_sport_updated_byTousersInput[]
    deleteMany?: sportScalarWhereInput | sportScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumathlete_gender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_gender_enum | Enumathlete_gender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumathlete_gender_enumFilter<$PrismaModel> | $Enums.athlete_gender_enum
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumathlete_gender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_gender_enum | Enumathlete_gender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.athlete_gender_enum[] | ListEnumathlete_gender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumathlete_gender_enumWithAggregatesFilter<$PrismaModel> | $Enums.athlete_gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumathlete_gender_enumFilter<$PrismaModel>
    _max?: NestedEnumathlete_gender_enumFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumathlete_competition_placementNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_competition_placement | Enumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    in?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel> | $Enums.athlete_competition_placement | null
  }

  export type NestedEnumathlete_competition_placementNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.athlete_competition_placement | Enumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    in?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.athlete_competition_placement[] | ListEnumathlete_competition_placementFieldRefInput<$PrismaModel> | null
    not?: NestedEnumathlete_competition_placementNullableWithAggregatesFilter<$PrismaModel> | $Enums.athlete_competition_placement | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel>
    _max?: NestedEnumathlete_competition_placementNullableFilter<$PrismaModel>
  }

  export type NestedEnumcompetition_levelFilter<$PrismaModel = never> = {
    equals?: $Enums.competition_level | Enumcompetition_levelFieldRefInput<$PrismaModel>
    in?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumcompetition_levelFilter<$PrismaModel> | $Enums.competition_level
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumcompetition_levelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.competition_level | Enumcompetition_levelFieldRefInput<$PrismaModel>
    in?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    notIn?: $Enums.competition_level[] | ListEnumcompetition_levelFieldRefInput<$PrismaModel>
    not?: NestedEnumcompetition_levelWithAggregatesFilter<$PrismaModel> | $Enums.competition_level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcompetition_levelFilter<$PrismaModel>
    _max?: NestedEnumcompetition_levelFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.users_role[] | ListEnumusers_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutAthlete_athlete_created_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_athlete_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_athlete_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_created_byTousersInput>
  }

  export type usersCreateWithoutAthlete_athlete_updated_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_athlete_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_athlete_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_updated_byTousersInput>
  }

  export type athlete_competitionCreateWithoutAthleteInput = {
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    competition: competitionCreateNestedOneWithoutAthlete_competitionInput
    users_athlete_competition_created_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_created_byTousersInput
    users_athlete_competition_updated_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_updated_byTousersInput
  }

  export type athlete_competitionUncheckedCreateWithoutAthleteInput = {
    id?: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionCreateOrConnectWithoutAthleteInput = {
    where: athlete_competitionWhereUniqueInput
    create: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput>
  }

  export type athlete_competitionCreateManyAthleteInputEnvelope = {
    data: athlete_competitionCreateManyAthleteInput | athlete_competitionCreateManyAthleteInput[]
    skipDuplicates?: boolean
  }

  export type athlete_sportCreateWithoutAthleteInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_sport_created_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_created_byTousersInput
    sport: sportCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_updated_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_updated_byTousersInput
  }

  export type athlete_sportUncheckedCreateWithoutAthleteInput = {
    id?: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportCreateOrConnectWithoutAthleteInput = {
    where: athlete_sportWhereUniqueInput
    create: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput>
  }

  export type athlete_sportCreateManyAthleteInputEnvelope = {
    data: athlete_sportCreateManyAthleteInput | athlete_sportCreateManyAthleteInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAthlete_athlete_created_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_athlete_created_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_athlete_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_athlete_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_athlete_created_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_athlete_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_athlete_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUpsertWithoutAthlete_athlete_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_athlete_updated_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_athlete_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_athlete_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_athlete_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_athlete_updated_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_athlete_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_athlete_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type athlete_competitionUpsertWithWhereUniqueWithoutAthleteInput = {
    where: athlete_competitionWhereUniqueInput
    update: XOR<athlete_competitionUpdateWithoutAthleteInput, athlete_competitionUncheckedUpdateWithoutAthleteInput>
    create: XOR<athlete_competitionCreateWithoutAthleteInput, athlete_competitionUncheckedCreateWithoutAthleteInput>
  }

  export type athlete_competitionUpdateWithWhereUniqueWithoutAthleteInput = {
    where: athlete_competitionWhereUniqueInput
    data: XOR<athlete_competitionUpdateWithoutAthleteInput, athlete_competitionUncheckedUpdateWithoutAthleteInput>
  }

  export type athlete_competitionUpdateManyWithWhereWithoutAthleteInput = {
    where: athlete_competitionScalarWhereInput
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyWithoutAthleteInput>
  }

  export type athlete_competitionScalarWhereInput = {
    AND?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
    OR?: athlete_competitionScalarWhereInput[]
    NOT?: athlete_competitionScalarWhereInput | athlete_competitionScalarWhereInput[]
    id?: IntFilter<"athlete_competition"> | number
    athlete_id?: IntFilter<"athlete_competition"> | number
    competition_id?: IntFilter<"athlete_competition"> | number
    placement?: Enumathlete_competition_placementNullableFilter<"athlete_competition"> | $Enums.athlete_competition_placement | null
    created_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    created_by?: IntFilter<"athlete_competition"> | number
    updated_at?: DateTimeNullableFilter<"athlete_competition"> | Date | string | null
    updated_by?: IntFilter<"athlete_competition"> | number
  }

  export type athlete_sportUpsertWithWhereUniqueWithoutAthleteInput = {
    where: athlete_sportWhereUniqueInput
    update: XOR<athlete_sportUpdateWithoutAthleteInput, athlete_sportUncheckedUpdateWithoutAthleteInput>
    create: XOR<athlete_sportCreateWithoutAthleteInput, athlete_sportUncheckedCreateWithoutAthleteInput>
  }

  export type athlete_sportUpdateWithWhereUniqueWithoutAthleteInput = {
    where: athlete_sportWhereUniqueInput
    data: XOR<athlete_sportUpdateWithoutAthleteInput, athlete_sportUncheckedUpdateWithoutAthleteInput>
  }

  export type athlete_sportUpdateManyWithWhereWithoutAthleteInput = {
    where: athlete_sportScalarWhereInput
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyWithoutAthleteInput>
  }

  export type athlete_sportScalarWhereInput = {
    AND?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
    OR?: athlete_sportScalarWhereInput[]
    NOT?: athlete_sportScalarWhereInput | athlete_sportScalarWhereInput[]
    id?: IntFilter<"athlete_sport"> | number
    athlete_id?: IntFilter<"athlete_sport"> | number
    sport_id?: IntFilter<"athlete_sport"> | number
    created_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    created_by?: IntFilter<"athlete_sport"> | number
    updated_at?: DateTimeNullableFilter<"athlete_sport"> | Date | string | null
    updated_by?: IntFilter<"athlete_sport"> | number
  }

  export type athleteCreateWithoutAthlete_competitionInput = {
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_created_byTousers: usersCreateNestedOneWithoutAthlete_athlete_created_byTousersInput
    users_athlete_updated_byTousers: usersCreateNestedOneWithoutAthlete_athlete_updated_byTousersInput
    athlete_sport?: athlete_sportCreateNestedManyWithoutAthleteInput
  }

  export type athleteUncheckedCreateWithoutAthlete_competitionInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athleteCreateOrConnectWithoutAthlete_competitionInput = {
    where: athleteWhereUniqueInput
    create: XOR<athleteCreateWithoutAthlete_competitionInput, athleteUncheckedCreateWithoutAthlete_competitionInput>
  }

  export type competitionCreateWithoutAthlete_competitionInput = {
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_competition_created_byTousers: usersCreateNestedOneWithoutCompetition_competition_created_byTousersInput
    users_competition_updated_byTousers: usersCreateNestedOneWithoutCompetition_competition_updated_byTousersInput
  }

  export type competitionUncheckedCreateWithoutAthlete_competitionInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type competitionCreateOrConnectWithoutAthlete_competitionInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutAthlete_competitionInput, competitionUncheckedCreateWithoutAthlete_competitionInput>
  }

  export type usersCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
  }

  export type usersCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
  }

  export type athleteUpsertWithoutAthlete_competitionInput = {
    update: XOR<athleteUpdateWithoutAthlete_competitionInput, athleteUncheckedUpdateWithoutAthlete_competitionInput>
    create: XOR<athleteCreateWithoutAthlete_competitionInput, athleteUncheckedCreateWithoutAthlete_competitionInput>
    where?: athleteWhereInput
  }

  export type athleteUpdateToOneWithWhereWithoutAthlete_competitionInput = {
    where?: athleteWhereInput
    data: XOR<athleteUpdateWithoutAthlete_competitionInput, athleteUncheckedUpdateWithoutAthlete_competitionInput>
  }

  export type athleteUpdateWithoutAthlete_competitionInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_created_byTousersNestedInput
    users_athlete_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_updated_byTousersNestedInput
    athlete_sport?: athlete_sportUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateWithoutAthlete_competitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type competitionUpsertWithoutAthlete_competitionInput = {
    update: XOR<competitionUpdateWithoutAthlete_competitionInput, competitionUncheckedUpdateWithoutAthlete_competitionInput>
    create: XOR<competitionCreateWithoutAthlete_competitionInput, competitionUncheckedCreateWithoutAthlete_competitionInput>
    where?: competitionWhereInput
  }

  export type competitionUpdateToOneWithWhereWithoutAthlete_competitionInput = {
    where?: competitionWhereInput
    data: XOR<competitionUpdateWithoutAthlete_competitionInput, competitionUncheckedUpdateWithoutAthlete_competitionInput>
  }

  export type competitionUpdateWithoutAthlete_competitionInput = {
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_competition_created_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_created_byTousersNestedInput
    users_competition_updated_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_updated_byTousersNestedInput
  }

  export type competitionUncheckedUpdateWithoutAthlete_competitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpsertWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUpsertWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_competition_athlete_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type athleteCreateWithoutAthlete_sportInput = {
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_created_byTousers: usersCreateNestedOneWithoutAthlete_athlete_created_byTousersInput
    users_athlete_updated_byTousers: usersCreateNestedOneWithoutAthlete_athlete_updated_byTousersInput
    athlete_competition?: athlete_competitionCreateNestedManyWithoutAthleteInput
  }

  export type athleteUncheckedCreateWithoutAthlete_sportInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athleteCreateOrConnectWithoutAthlete_sportInput = {
    where: athleteWhereUniqueInput
    create: XOR<athleteCreateWithoutAthlete_sportInput, athleteUncheckedCreateWithoutAthlete_sportInput>
  }

  export type usersCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
  }

  export type sportCreateWithoutAthlete_sportInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_sport_created_byTousers: usersCreateNestedOneWithoutSport_sport_created_byTousersInput
    users_sport_updated_byTousers: usersCreateNestedOneWithoutSport_sport_updated_byTousersInput
  }

  export type sportUncheckedCreateWithoutAthlete_sportInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type sportCreateOrConnectWithoutAthlete_sportInput = {
    where: sportWhereUniqueInput
    create: XOR<sportCreateWithoutAthlete_sportInput, sportUncheckedCreateWithoutAthlete_sportInput>
  }

  export type usersCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
  }

  export type athleteUpsertWithoutAthlete_sportInput = {
    update: XOR<athleteUpdateWithoutAthlete_sportInput, athleteUncheckedUpdateWithoutAthlete_sportInput>
    create: XOR<athleteCreateWithoutAthlete_sportInput, athleteUncheckedCreateWithoutAthlete_sportInput>
    where?: athleteWhereInput
  }

  export type athleteUpdateToOneWithWhereWithoutAthlete_sportInput = {
    where?: athleteWhereInput
    data: XOR<athleteUpdateWithoutAthlete_sportInput, athleteUncheckedUpdateWithoutAthlete_sportInput>
  }

  export type athleteUpdateWithoutAthlete_sportInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_created_byTousersNestedInput
    users_athlete_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_updated_byTousersNestedInput
    athlete_competition?: athlete_competitionUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateWithoutAthlete_sportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type usersUpsertWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type sportUpsertWithoutAthlete_sportInput = {
    update: XOR<sportUpdateWithoutAthlete_sportInput, sportUncheckedUpdateWithoutAthlete_sportInput>
    create: XOR<sportCreateWithoutAthlete_sportInput, sportUncheckedCreateWithoutAthlete_sportInput>
    where?: sportWhereInput
  }

  export type sportUpdateToOneWithWhereWithoutAthlete_sportInput = {
    where?: sportWhereInput
    data: XOR<sportUpdateWithoutAthlete_sportInput, sportUncheckedUpdateWithoutAthlete_sportInput>
  }

  export type sportUpdateWithoutAthlete_sportInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_sport_created_byTousers?: usersUpdateOneRequiredWithoutSport_sport_created_byTousersNestedInput
    users_sport_updated_byTousers?: usersUpdateOneRequiredWithoutSport_sport_updated_byTousersNestedInput
  }

  export type sportUncheckedUpdateWithoutAthlete_sportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type usersUpsertWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
    create: XOR<usersCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedCreateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput, usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput>
  }

  export type usersUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutAthlete_sport_athlete_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type athlete_competitionCreateWithoutCompetitionInput = {
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_competitionInput
    users_athlete_competition_created_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_created_byTousersInput
    users_athlete_competition_updated_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_updated_byTousersInput
  }

  export type athlete_competitionUncheckedCreateWithoutCompetitionInput = {
    id?: number
    athlete_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionCreateOrConnectWithoutCompetitionInput = {
    where: athlete_competitionWhereUniqueInput
    create: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput>
  }

  export type athlete_competitionCreateManyCompetitionInputEnvelope = {
    data: athlete_competitionCreateManyCompetitionInput | athlete_competitionCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCompetition_competition_created_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutCompetition_competition_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutCompetition_competition_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompetition_competition_created_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_created_byTousersInput>
  }

  export type usersCreateWithoutCompetition_competition_updated_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutCompetition_competition_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutCompetition_competition_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_updated_byTousersInput>
  }

  export type athlete_competitionUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: athlete_competitionWhereUniqueInput
    update: XOR<athlete_competitionUpdateWithoutCompetitionInput, athlete_competitionUncheckedUpdateWithoutCompetitionInput>
    create: XOR<athlete_competitionCreateWithoutCompetitionInput, athlete_competitionUncheckedCreateWithoutCompetitionInput>
  }

  export type athlete_competitionUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: athlete_competitionWhereUniqueInput
    data: XOR<athlete_competitionUpdateWithoutCompetitionInput, athlete_competitionUncheckedUpdateWithoutCompetitionInput>
  }

  export type athlete_competitionUpdateManyWithWhereWithoutCompetitionInput = {
    where: athlete_competitionScalarWhereInput
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type usersUpsertWithoutCompetition_competition_created_byTousersInput = {
    update: XOR<usersUpdateWithoutCompetition_competition_created_byTousersInput, usersUncheckedUpdateWithoutCompetition_competition_created_byTousersInput>
    create: XOR<usersCreateWithoutCompetition_competition_created_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCompetition_competition_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCompetition_competition_created_byTousersInput, usersUncheckedUpdateWithoutCompetition_competition_created_byTousersInput>
  }

  export type usersUpdateWithoutCompetition_competition_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutCompetition_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUpsertWithoutCompetition_competition_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedUpdateWithoutCompetition_competition_updated_byTousersInput>
    create: XOR<usersCreateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedCreateWithoutCompetition_competition_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCompetition_competition_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCompetition_competition_updated_byTousersInput, usersUncheckedUpdateWithoutCompetition_competition_updated_byTousersInput>
  }

  export type usersUpdateWithoutCompetition_competition_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutCompetition_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type athlete_sportCreateWithoutSportInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_created_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_created_byTousersInput
    users_athlete_sport_updated_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_updated_byTousersInput
  }

  export type athlete_sportUncheckedCreateWithoutSportInput = {
    id?: number
    athlete_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportCreateOrConnectWithoutSportInput = {
    where: athlete_sportWhereUniqueInput
    create: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput>
  }

  export type athlete_sportCreateManySportInputEnvelope = {
    data: athlete_sportCreateManySportInput | athlete_sportCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutSport_sport_created_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_updated_byTousers?: sportCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutSport_sport_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_updated_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutSport_sport_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSport_sport_created_byTousersInput, usersUncheckedCreateWithoutSport_sport_created_byTousersInput>
  }

  export type usersCreateWithoutSport_sport_updated_byTousersInput = {
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportCreateNestedManyWithoutUsers_sport_created_byTousersInput
  }

  export type usersUncheckedCreateWithoutSport_sport_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    user_role?: $Enums.users_role | null
    email: string
    email_verified?: boolean | null
    created_at?: Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_created_byTousersInput
    athlete_athlete_updated_byTousers?: athleteUncheckedCreateNestedManyWithoutUsers_athlete_updated_byTousersInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_created_byTousersInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedCreateNestedManyWithoutUsers_athlete_competition_updated_byTousersInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_created_byTousersInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedCreateNestedManyWithoutUsers_athlete_sport_updated_byTousersInput
    competition_competition_created_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_created_byTousersInput
    competition_competition_updated_byTousers?: competitionUncheckedCreateNestedManyWithoutUsers_competition_updated_byTousersInput
    sport_sport_created_byTousers?: sportUncheckedCreateNestedManyWithoutUsers_sport_created_byTousersInput
  }

  export type usersCreateOrConnectWithoutSport_sport_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSport_sport_updated_byTousersInput, usersUncheckedCreateWithoutSport_sport_updated_byTousersInput>
  }

  export type athlete_sportUpsertWithWhereUniqueWithoutSportInput = {
    where: athlete_sportWhereUniqueInput
    update: XOR<athlete_sportUpdateWithoutSportInput, athlete_sportUncheckedUpdateWithoutSportInput>
    create: XOR<athlete_sportCreateWithoutSportInput, athlete_sportUncheckedCreateWithoutSportInput>
  }

  export type athlete_sportUpdateWithWhereUniqueWithoutSportInput = {
    where: athlete_sportWhereUniqueInput
    data: XOR<athlete_sportUpdateWithoutSportInput, athlete_sportUncheckedUpdateWithoutSportInput>
  }

  export type athlete_sportUpdateManyWithWhereWithoutSportInput = {
    where: athlete_sportScalarWhereInput
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyWithoutSportInput>
  }

  export type usersUpsertWithoutSport_sport_created_byTousersInput = {
    update: XOR<usersUpdateWithoutSport_sport_created_byTousersInput, usersUncheckedUpdateWithoutSport_sport_created_byTousersInput>
    create: XOR<usersCreateWithoutSport_sport_created_byTousersInput, usersUncheckedCreateWithoutSport_sport_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSport_sport_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSport_sport_created_byTousersInput, usersUncheckedUpdateWithoutSport_sport_created_byTousersInput>
  }

  export type usersUpdateWithoutSport_sport_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutSport_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_updated_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersNestedInput
  }

  export type usersUpsertWithoutSport_sport_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutSport_sport_updated_byTousersInput, usersUncheckedUpdateWithoutSport_sport_updated_byTousersInput>
    create: XOR<usersCreateWithoutSport_sport_updated_byTousersInput, usersUncheckedCreateWithoutSport_sport_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSport_sport_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSport_sport_updated_byTousersInput, usersUncheckedUpdateWithoutSport_sport_updated_byTousersInput>
  }

  export type usersUpdateWithoutSport_sport_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUpdateManyWithoutUsers_sport_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutSport_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_athlete_created_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersNestedInput
    athlete_athlete_updated_byTousers?: athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersNestedInput
    athlete_competition_athlete_competition_created_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersNestedInput
    athlete_competition_athlete_competition_updated_byTousers?: athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersNestedInput
    athlete_sport_athlete_sport_created_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersNestedInput
    athlete_sport_athlete_sport_updated_byTousers?: athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersNestedInput
    competition_competition_created_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersNestedInput
    competition_competition_updated_byTousers?: competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersNestedInput
    sport_sport_created_byTousers?: sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersNestedInput
  }

  export type athleteCreateWithoutUsers_athlete_created_byTousersInput = {
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_updated_byTousers: usersCreateNestedOneWithoutAthlete_athlete_updated_byTousersInput
    athlete_competition?: athlete_competitionCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportCreateNestedManyWithoutAthleteInput
  }

  export type athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athleteCreateOrConnectWithoutUsers_athlete_created_byTousersInput = {
    where: athleteWhereUniqueInput
    create: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput>
  }

  export type athleteCreateManyUsers_athlete_created_byTousersInputEnvelope = {
    data: athleteCreateManyUsers_athlete_created_byTousersInput | athleteCreateManyUsers_athlete_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athleteCreateWithoutUsers_athlete_updated_byTousersInput = {
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users_athlete_created_byTousers: usersCreateNestedOneWithoutAthlete_athlete_created_byTousersInput
    athlete_competition?: athlete_competitionCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportCreateNestedManyWithoutAthleteInput
  }

  export type athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutAthleteInput
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutAthleteInput
  }

  export type athleteCreateOrConnectWithoutUsers_athlete_updated_byTousersInput = {
    where: athleteWhereUniqueInput
    create: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput>
  }

  export type athleteCreateManyUsers_athlete_updated_byTousersInputEnvelope = {
    data: athleteCreateManyUsers_athlete_updated_byTousersInput | athleteCreateManyUsers_athlete_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput = {
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_competitionInput
    competition: competitionCreateNestedOneWithoutAthlete_competitionInput
    users_athlete_competition_updated_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_updated_byTousersInput
  }

  export type athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_created_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    create: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput>
  }

  export type athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInputEnvelope = {
    data: athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInput | athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput = {
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_competitionInput
    competition: competitionCreateNestedOneWithoutAthlete_competitionInput
    users_athlete_competition_created_byTousers: usersCreateNestedOneWithoutAthlete_competition_athlete_competition_created_byTousersInput
  }

  export type athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type athlete_competitionCreateOrConnectWithoutUsers_athlete_competition_updated_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    create: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput>
  }

  export type athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInputEnvelope = {
    data: athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInput | athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_sportInput
    sport: sportCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_updated_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_updated_byTousersInput
  }

  export type athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportCreateOrConnectWithoutUsers_athlete_sport_created_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    create: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput>
  }

  export type athlete_sportCreateManyUsers_athlete_sport_created_byTousersInputEnvelope = {
    data: athlete_sportCreateManyUsers_athlete_sport_created_byTousersInput | athlete_sportCreateManyUsers_athlete_sport_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete: athleteCreateNestedOneWithoutAthlete_sportInput
    users_athlete_sport_created_byTousers: usersCreateNestedOneWithoutAthlete_sport_athlete_sport_created_byTousersInput
    sport: sportCreateNestedOneWithoutAthlete_sportInput
  }

  export type athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type athlete_sportCreateOrConnectWithoutUsers_athlete_sport_updated_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    create: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput>
  }

  export type athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInputEnvelope = {
    data: athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInput | athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type competitionCreateWithoutUsers_competition_created_byTousersInput = {
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_competition?: athlete_competitionCreateNestedManyWithoutCompetitionInput
    users_competition_updated_byTousers: usersCreateNestedOneWithoutCompetition_competition_updated_byTousersInput
  }

  export type competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutUsers_competition_created_byTousersInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput>
  }

  export type competitionCreateManyUsers_competition_created_byTousersInputEnvelope = {
    data: competitionCreateManyUsers_competition_created_byTousersInput | competitionCreateManyUsers_competition_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type competitionCreateWithoutUsers_competition_updated_byTousersInput = {
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_competition?: athlete_competitionCreateNestedManyWithoutCompetitionInput
    users_competition_created_byTousers: usersCreateNestedOneWithoutCompetition_competition_created_byTousersInput
  }

  export type competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    athlete_competition?: athlete_competitionUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutUsers_competition_updated_byTousersInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput>
  }

  export type competitionCreateManyUsers_competition_updated_byTousersInputEnvelope = {
    data: competitionCreateManyUsers_competition_updated_byTousersInput | competitionCreateManyUsers_competition_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type sportCreateWithoutUsers_sport_created_byTousersInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_sport?: athlete_sportCreateNestedManyWithoutSportInput
    users_sport_updated_byTousers: usersCreateNestedOneWithoutSport_sport_updated_byTousersInput
  }

  export type sportUncheckedCreateWithoutUsers_sport_created_byTousersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutSportInput
  }

  export type sportCreateOrConnectWithoutUsers_sport_created_byTousersInput = {
    where: sportWhereUniqueInput
    create: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput>
  }

  export type sportCreateManyUsers_sport_created_byTousersInputEnvelope = {
    data: sportCreateManyUsers_sport_created_byTousersInput | sportCreateManyUsers_sport_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type sportCreateWithoutUsers_sport_updated_byTousersInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    athlete_sport?: athlete_sportCreateNestedManyWithoutSportInput
    users_sport_created_byTousers: usersCreateNestedOneWithoutSport_sport_created_byTousersInput
  }

  export type sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    athlete_sport?: athlete_sportUncheckedCreateNestedManyWithoutSportInput
  }

  export type sportCreateOrConnectWithoutUsers_sport_updated_byTousersInput = {
    where: sportWhereUniqueInput
    create: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput>
  }

  export type sportCreateManyUsers_sport_updated_byTousersInputEnvelope = {
    data: sportCreateManyUsers_sport_updated_byTousersInput | sportCreateManyUsers_sport_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type athleteUpsertWithWhereUniqueWithoutUsers_athlete_created_byTousersInput = {
    where: athleteWhereUniqueInput
    update: XOR<athleteUpdateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedUpdateWithoutUsers_athlete_created_byTousersInput>
    create: XOR<athleteCreateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_created_byTousersInput>
  }

  export type athleteUpdateWithWhereUniqueWithoutUsers_athlete_created_byTousersInput = {
    where: athleteWhereUniqueInput
    data: XOR<athleteUpdateWithoutUsers_athlete_created_byTousersInput, athleteUncheckedUpdateWithoutUsers_athlete_created_byTousersInput>
  }

  export type athleteUpdateManyWithWhereWithoutUsers_athlete_created_byTousersInput = {
    where: athleteScalarWhereInput
    data: XOR<athleteUpdateManyMutationInput, athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersInput>
  }

  export type athleteScalarWhereInput = {
    AND?: athleteScalarWhereInput | athleteScalarWhereInput[]
    OR?: athleteScalarWhereInput[]
    NOT?: athleteScalarWhereInput | athleteScalarWhereInput[]
    id?: IntFilter<"athlete"> | number
    name?: StringFilter<"athlete"> | string
    surname?: StringFilter<"athlete"> | string
    gender?: Enumathlete_gender_enumFilter<"athlete"> | $Enums.athlete_gender_enum
    height?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"athlete"> | Decimal | DecimalJsLike | number | string | null
    birthdate?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    created_by?: IntFilter<"athlete"> | number
    updated_at?: DateTimeNullableFilter<"athlete"> | Date | string | null
    updated_by?: IntFilter<"athlete"> | number
  }

  export type athleteUpsertWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput = {
    where: athleteWhereUniqueInput
    update: XOR<athleteUpdateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedUpdateWithoutUsers_athlete_updated_byTousersInput>
    create: XOR<athleteCreateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedCreateWithoutUsers_athlete_updated_byTousersInput>
  }

  export type athleteUpdateWithWhereUniqueWithoutUsers_athlete_updated_byTousersInput = {
    where: athleteWhereUniqueInput
    data: XOR<athleteUpdateWithoutUsers_athlete_updated_byTousersInput, athleteUncheckedUpdateWithoutUsers_athlete_updated_byTousersInput>
  }

  export type athleteUpdateManyWithWhereWithoutUsers_athlete_updated_byTousersInput = {
    where: athleteScalarWhereInput
    data: XOR<athleteUpdateManyMutationInput, athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersInput>
  }

  export type athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    update: XOR<athlete_competitionUpdateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_created_byTousersInput>
    create: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_created_byTousersInput>
  }

  export type athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_created_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    data: XOR<athlete_competitionUpdateWithoutUsers_athlete_competition_created_byTousersInput, athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_created_byTousersInput>
  }

  export type athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_created_byTousersInput = {
    where: athlete_competitionScalarWhereInput
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersInput>
  }

  export type athlete_competitionUpsertWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    update: XOR<athlete_competitionUpdateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_updated_byTousersInput>
    create: XOR<athlete_competitionCreateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedCreateWithoutUsers_athlete_competition_updated_byTousersInput>
  }

  export type athlete_competitionUpdateWithWhereUniqueWithoutUsers_athlete_competition_updated_byTousersInput = {
    where: athlete_competitionWhereUniqueInput
    data: XOR<athlete_competitionUpdateWithoutUsers_athlete_competition_updated_byTousersInput, athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_updated_byTousersInput>
  }

  export type athlete_competitionUpdateManyWithWhereWithoutUsers_athlete_competition_updated_byTousersInput = {
    where: athlete_competitionScalarWhereInput
    data: XOR<athlete_competitionUpdateManyMutationInput, athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersInput>
  }

  export type athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    update: XOR<athlete_sportUpdateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_created_byTousersInput>
    create: XOR<athlete_sportCreateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_created_byTousersInput>
  }

  export type athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_created_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    data: XOR<athlete_sportUpdateWithoutUsers_athlete_sport_created_byTousersInput, athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_created_byTousersInput>
  }

  export type athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_created_byTousersInput = {
    where: athlete_sportScalarWhereInput
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersInput>
  }

  export type athlete_sportUpsertWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    update: XOR<athlete_sportUpdateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_updated_byTousersInput>
    create: XOR<athlete_sportCreateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedCreateWithoutUsers_athlete_sport_updated_byTousersInput>
  }

  export type athlete_sportUpdateWithWhereUniqueWithoutUsers_athlete_sport_updated_byTousersInput = {
    where: athlete_sportWhereUniqueInput
    data: XOR<athlete_sportUpdateWithoutUsers_athlete_sport_updated_byTousersInput, athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_updated_byTousersInput>
  }

  export type athlete_sportUpdateManyWithWhereWithoutUsers_athlete_sport_updated_byTousersInput = {
    where: athlete_sportScalarWhereInput
    data: XOR<athlete_sportUpdateManyMutationInput, athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersInput>
  }

  export type competitionUpsertWithWhereUniqueWithoutUsers_competition_created_byTousersInput = {
    where: competitionWhereUniqueInput
    update: XOR<competitionUpdateWithoutUsers_competition_created_byTousersInput, competitionUncheckedUpdateWithoutUsers_competition_created_byTousersInput>
    create: XOR<competitionCreateWithoutUsers_competition_created_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_created_byTousersInput>
  }

  export type competitionUpdateWithWhereUniqueWithoutUsers_competition_created_byTousersInput = {
    where: competitionWhereUniqueInput
    data: XOR<competitionUpdateWithoutUsers_competition_created_byTousersInput, competitionUncheckedUpdateWithoutUsers_competition_created_byTousersInput>
  }

  export type competitionUpdateManyWithWhereWithoutUsers_competition_created_byTousersInput = {
    where: competitionScalarWhereInput
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersInput>
  }

  export type competitionScalarWhereInput = {
    AND?: competitionScalarWhereInput | competitionScalarWhereInput[]
    OR?: competitionScalarWhereInput[]
    NOT?: competitionScalarWhereInput | competitionScalarWhereInput[]
    id?: IntFilter<"competition"> | number
    title?: StringFilter<"competition"> | string
    level?: Enumcompetition_levelFilter<"competition"> | $Enums.competition_level
    from_date?: DateTimeFilter<"competition"> | Date | string
    until_date?: DateTimeFilter<"competition"> | Date | string
    created_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    created_by?: IntFilter<"competition"> | number
    updated_at?: DateTimeNullableFilter<"competition"> | Date | string | null
    updated_by?: IntFilter<"competition"> | number
  }

  export type competitionUpsertWithWhereUniqueWithoutUsers_competition_updated_byTousersInput = {
    where: competitionWhereUniqueInput
    update: XOR<competitionUpdateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedUpdateWithoutUsers_competition_updated_byTousersInput>
    create: XOR<competitionCreateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedCreateWithoutUsers_competition_updated_byTousersInput>
  }

  export type competitionUpdateWithWhereUniqueWithoutUsers_competition_updated_byTousersInput = {
    where: competitionWhereUniqueInput
    data: XOR<competitionUpdateWithoutUsers_competition_updated_byTousersInput, competitionUncheckedUpdateWithoutUsers_competition_updated_byTousersInput>
  }

  export type competitionUpdateManyWithWhereWithoutUsers_competition_updated_byTousersInput = {
    where: competitionScalarWhereInput
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersInput>
  }

  export type sportUpsertWithWhereUniqueWithoutUsers_sport_created_byTousersInput = {
    where: sportWhereUniqueInput
    update: XOR<sportUpdateWithoutUsers_sport_created_byTousersInput, sportUncheckedUpdateWithoutUsers_sport_created_byTousersInput>
    create: XOR<sportCreateWithoutUsers_sport_created_byTousersInput, sportUncheckedCreateWithoutUsers_sport_created_byTousersInput>
  }

  export type sportUpdateWithWhereUniqueWithoutUsers_sport_created_byTousersInput = {
    where: sportWhereUniqueInput
    data: XOR<sportUpdateWithoutUsers_sport_created_byTousersInput, sportUncheckedUpdateWithoutUsers_sport_created_byTousersInput>
  }

  export type sportUpdateManyWithWhereWithoutUsers_sport_created_byTousersInput = {
    where: sportScalarWhereInput
    data: XOR<sportUpdateManyMutationInput, sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersInput>
  }

  export type sportScalarWhereInput = {
    AND?: sportScalarWhereInput | sportScalarWhereInput[]
    OR?: sportScalarWhereInput[]
    NOT?: sportScalarWhereInput | sportScalarWhereInput[]
    id?: IntFilter<"sport"> | number
    name?: StringFilter<"sport"> | string
    created_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    created_by?: IntFilter<"sport"> | number
    updated_at?: DateTimeNullableFilter<"sport"> | Date | string | null
    updated_by?: IntFilter<"sport"> | number
  }

  export type sportUpsertWithWhereUniqueWithoutUsers_sport_updated_byTousersInput = {
    where: sportWhereUniqueInput
    update: XOR<sportUpdateWithoutUsers_sport_updated_byTousersInput, sportUncheckedUpdateWithoutUsers_sport_updated_byTousersInput>
    create: XOR<sportCreateWithoutUsers_sport_updated_byTousersInput, sportUncheckedCreateWithoutUsers_sport_updated_byTousersInput>
  }

  export type sportUpdateWithWhereUniqueWithoutUsers_sport_updated_byTousersInput = {
    where: sportWhereUniqueInput
    data: XOR<sportUpdateWithoutUsers_sport_updated_byTousersInput, sportUncheckedUpdateWithoutUsers_sport_updated_byTousersInput>
  }

  export type sportUpdateManyWithWhereWithoutUsers_sport_updated_byTousersInput = {
    where: sportScalarWhereInput
    data: XOR<sportUpdateManyMutationInput, sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersInput>
  }

  export type athlete_competitionCreateManyAthleteInput = {
    id?: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportCreateManyAthleteInput = {
    id?: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionUpdateWithoutAthleteInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: competitionUpdateOneRequiredWithoutAthlete_competitionNestedInput
    users_athlete_competition_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_created_byTousersNestedInput
    users_athlete_competition_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_updated_byTousersNestedInput
  }

  export type athlete_competitionUncheckedUpdateWithoutAthleteInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionUncheckedUpdateManyWithoutAthleteInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportUpdateWithoutAthleteInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_sport_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_created_byTousersNestedInput
    sport?: sportUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_updated_byTousersNestedInput
  }

  export type athlete_sportUncheckedUpdateWithoutAthleteInput = {
    id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportUncheckedUpdateManyWithoutAthleteInput = {
    id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionCreateManyCompetitionInput = {
    id?: number
    athlete_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionUpdateWithoutCompetitionInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_competitionNestedInput
    users_athlete_competition_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_created_byTousersNestedInput
    users_athlete_competition_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_updated_byTousersNestedInput
  }

  export type athlete_competitionUncheckedUpdateWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionUncheckedUpdateManyWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportCreateManySportInput = {
    id?: number
    athlete_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportUpdateWithoutSportInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_created_byTousersNestedInput
    users_athlete_sport_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_updated_byTousersNestedInput
  }

  export type athlete_sportUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athleteCreateManyUsers_athlete_created_byTousersInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athleteCreateManyUsers_athlete_updated_byTousersInput = {
    id?: number
    name: string
    surname: string
    gender: $Enums.athlete_gender_enum
    height?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    birthdate?: Date | string | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type athlete_competitionCreateManyUsers_athlete_competition_created_byTousersInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_competitionCreateManyUsers_athlete_competition_updated_byTousersInput = {
    id?: number
    athlete_id: number
    competition_id: number
    placement?: $Enums.athlete_competition_placement | null
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type athlete_sportCreateManyUsers_athlete_sport_created_byTousersInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type athlete_sportCreateManyUsers_athlete_sport_updated_byTousersInput = {
    id?: number
    athlete_id: number
    sport_id: number
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type competitionCreateManyUsers_competition_created_byTousersInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type competitionCreateManyUsers_competition_updated_byTousersInput = {
    id?: number
    title: string
    level: $Enums.competition_level
    from_date: Date | string
    until_date: Date | string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type sportCreateManyUsers_sport_created_byTousersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    updated_by: number
  }

  export type sportCreateManyUsers_sport_updated_byTousersInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    created_by: number
    updated_at?: Date | string | null
  }

  export type athleteUpdateWithoutUsers_athlete_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_updated_byTousersNestedInput
    athlete_competition?: athlete_competitionUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateWithoutUsers_athlete_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateManyWithoutUsers_athlete_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athleteUpdateWithoutUsers_athlete_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_athlete_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_athlete_created_byTousersNestedInput
    athlete_competition?: athlete_competitionUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateWithoutUsers_athlete_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutAthleteNestedInput
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutAthleteNestedInput
  }

  export type athleteUncheckedUpdateManyWithoutUsers_athlete_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    gender?: Enumathlete_gender_enumFieldUpdateOperationsInput | $Enums.athlete_gender_enum
    height?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_competitionUpdateWithoutUsers_athlete_competition_created_byTousersInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_competitionNestedInput
    competition?: competitionUpdateOneRequiredWithoutAthlete_competitionNestedInput
    users_athlete_competition_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_updated_byTousersNestedInput
  }

  export type athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_competitionUpdateWithoutUsers_athlete_competition_updated_byTousersInput = {
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_competitionNestedInput
    competition?: competitionUpdateOneRequiredWithoutAthlete_competitionNestedInput
    users_athlete_competition_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_competition_athlete_competition_created_byTousersNestedInput
  }

  export type athlete_competitionUncheckedUpdateWithoutUsers_athlete_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_competitionUncheckedUpdateManyWithoutUsers_athlete_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    placement?: NullableEnumathlete_competition_placementFieldUpdateOperationsInput | $Enums.athlete_competition_placement | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_sportUpdateWithoutUsers_athlete_sport_created_byTousersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_sportNestedInput
    sport?: sportUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_updated_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_updated_byTousersNestedInput
  }

  export type athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type athlete_sportUpdateWithoutUsers_athlete_sport_updated_byTousersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete?: athleteUpdateOneRequiredWithoutAthlete_sportNestedInput
    users_athlete_sport_created_byTousers?: usersUpdateOneRequiredWithoutAthlete_sport_athlete_sport_created_byTousersNestedInput
    sport?: sportUpdateOneRequiredWithoutAthlete_sportNestedInput
  }

  export type athlete_sportUncheckedUpdateWithoutUsers_athlete_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type athlete_sportUncheckedUpdateManyWithoutUsers_athlete_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    athlete_id?: IntFieldUpdateOperationsInput | number
    sport_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competitionUpdateWithoutUsers_competition_created_byTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_competition?: athlete_competitionUpdateManyWithoutCompetitionNestedInput
    users_competition_updated_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_updated_byTousersNestedInput
  }

  export type competitionUncheckedUpdateWithoutUsers_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateManyWithoutUsers_competition_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type competitionUpdateWithoutUsers_competition_updated_byTousersInput = {
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_competition?: athlete_competitionUpdateManyWithoutCompetitionNestedInput
    users_competition_created_byTousers?: usersUpdateOneRequiredWithoutCompetition_competition_created_byTousersNestedInput
  }

  export type competitionUncheckedUpdateWithoutUsers_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_competition?: athlete_competitionUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateManyWithoutUsers_competition_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    level?: Enumcompetition_levelFieldUpdateOperationsInput | $Enums.competition_level
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    until_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sportUpdateWithoutUsers_sport_created_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_sport?: athlete_sportUpdateManyWithoutSportNestedInput
    users_sport_updated_byTousers?: usersUpdateOneRequiredWithoutSport_sport_updated_byTousersNestedInput
  }

  export type sportUncheckedUpdateWithoutUsers_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type sportUncheckedUpdateManyWithoutUsers_sport_created_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
  }

  export type sportUpdateWithoutUsers_sport_updated_byTousersInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_sport?: athlete_sportUpdateManyWithoutSportNestedInput
    users_sport_created_byTousers?: usersUpdateOneRequiredWithoutSport_sport_created_byTousersNestedInput
  }

  export type sportUncheckedUpdateWithoutUsers_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    athlete_sport?: athlete_sportUncheckedUpdateManyWithoutSportNestedInput
  }

  export type sportUncheckedUpdateManyWithoutUsers_sport_updated_byTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}