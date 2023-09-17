/**
 * A component whose root component can be controlled via a `as` prop.
 *
 * Adjusts valid props based on the type of `as`.
 */
interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(props: { as: C } & OverrideProps<M, C>): JSX.Element | null
  (props: DefaultComponentProps<M>): JSX.Element | null
  displayName?: string
}

/**
 * Props of the component if `as={Component}` is used.
 */
type OverrideProps<M extends OverridableTypeMap, C extends React.ElementType> = BaseProps<M> &
  Omit<React.ComponentPropsWithRef<C>, keyof CommonProps>

/**
 * Props if `as={Component}` is NOT used.
 */
type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  Omit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>

/**
 * Props defined on the component + CommonProps.
 */
type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps

/**
 * Props that can be applied on all the components.
 */
interface CommonProps {
  className?: string
  style?: React.CSSProperties
}

interface OverridableTypeMap {
  defaultComponent: React.ElementType
  props: Record<string, unknown>
}
