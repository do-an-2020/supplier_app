import {
  NavigationState,
  ParamListBase,
  EventMapBase,
  EventMapCore,
  EventConsumer,
  PrivateValueStore,
  Route,
  PartialState,
  NavigationAction,
  EventEmitter,
} from '@react-navigation/native'

declare type NavigationHelpersCommon<
  ParamList extends ParamListBase,
  State extends NavigationState = NavigationState
> = {
  /**
   * Dispatch an action or an update function to the router.
   * The update function will receive the current state,
   *
   * @param action Action object or update function.
   */
  dispatch(action: NavigationAction | ((state: State) => NavigationAction)): void
  /**
   * Navigate to a route in current navigation tree.
   *
   * @param name Name of the route to navigate to.
   * @param [params] Params object for the route.
   */
  navigate<RouteName extends keyof ParamList>(
    ...args: ParamList[RouteName] extends undefined | any
      ? [RouteName] | [RouteName, ParamList[RouteName]]
      : [RouteName, ParamList[RouteName]]
  ): void
  /**
   * Navigate to a route in current navigation tree.
   *
   * @param route Object with `key` or `name` for the route to navigate to, and a `params` object.
   */
  navigate<RouteName extends keyof ParamList>(
    route:
      | {
          key: string
          params?: ParamList[RouteName]
        }
      | {
          name: RouteName
          key?: string
          params: ParamList[RouteName]
        }
  ): void
  /**
   * Reset the navigation state to the provided state.
   *
   * @param state Navigation state object.
   */
  reset(state: PartialState<State> | State): void
  /**
   * Go back to the previous route in history.
   */
  goBack(): void
  /**
   * Check if the screen is focused. The method returns `true` if focused, `false` otherwise.
   * Note that this method doesn't re-render screen when the focus changes. So don't use it in `render`.
   * To get notified of focus changes, use `addListener('focus', cb)` and `addListener('blur', cb)`.
   * To conditionally render content based on focus state, use the `useIsFocused` hook.
   */
  isFocused(): boolean
  /**
   * Check if dispatching back action will be handled by navigation.
   * Note that this method doesn't re-render screen when the result changes. So don't use it in `render`.
   */
  canGoBack(): boolean
  /**
   * Returns the parent navigator, if any. Reason why the function is called
   * dangerouslyGetParent is to warn developers against overusing it to eg. get parent
   * of parent and other hard-to-follow patterns.
   */
  dangerouslyGetParent<T = NavigationProp<ParamListBase> | undefined>(): T
  /**
   * Returns the navigator's state. Reason why the function is called
   * dangerouslyGetState is to discourage developers to use internal navigation's state.
   * Note that this method doesn't re-render screen when the result changes. So don't use it in `render`.
   */
  dangerouslyGetState(): State
} & PrivateValueStore<ParamList, keyof ParamList, {}>
export declare type NavigationHelpers<
  ParamList extends ParamListBase,
  EventMap extends EventMapBase = {}
> = NavigationHelpersCommon<ParamList> &
  EventEmitter<EventMap> & {
    /**
     * Update the param object for the route.
     * The new params will be shallow merged with the old one.
     *
     * @param params Params object for the current route.
     */
    setParams<RouteName extends keyof ParamList>(params: Partial<ParamList[RouteName]>): void
  }

export type NavigationProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
  State extends NavigationState = NavigationState,
  ScreenOptions extends object = {},
  EventMap extends EventMapBase = {}
> = NavigationHelpersCommon<ParamList, State> & {
  /**
   * Update the param object for the route.
   * The new params will be shallow merged with the old one.
   *
   * @param params Params object for the current route.
   */
  setParams(params: Partial<ParamList[RouteName]>): void
  /**
   * Update the options for the route.
   * The options object will be shallow merged with default options object.
   *
   * @param options Options object for the route.
   */
  setOptions(options: Partial<ScreenOptions>): void
} & EventConsumer<EventMap & EventMapCore<State>> &
  PrivateValueStore<ParamList, RouteName, EventMap>
export declare type RouteProp<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList
> = Omit<Route<Extract<RouteName, string>>, 'params'> &
  (ParamList[RouteName] extends undefined
    ? {}
    : {
        /**
         * Params for this route
         */
        params: ParamList[RouteName]
      })
