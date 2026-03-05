/**
 * Patrón Render Props para manejar fetch.
 * El componente no renderiza UI fija: delega en una función (render/children)
 * que recibe { data, loading, error, refetch }.
 * Útil para reutilizar lógica manteniendo la UI flexible.
 */
