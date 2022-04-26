import { renderHook, act } from '@testing-library/react-hooks';
import { useOpenFilter } from '../components/CatalogFilter/CatalogFilter';

test('can open filter', () => {
    const { result } = renderHook(() => useOpenFilter());

    expect(result.current.isOpenFilter).toBe(false);

    act(() => {
        result.current.handleFilterOpen();
    });

    expect(result.current.isOpenFilter).toBe(true);

    act(() => {
        result.current.handleFilterOpen();
    });

    expect(result.current.isOpenFilter).toBe(false);
}); 