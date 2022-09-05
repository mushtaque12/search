import { useState, useContext, useEffect } from 'react';
import SearchCard from '../../components/SearchCard';
import NoResult from 'components/NoResult';
import { ErrorPanelWrapper, NumberContainer } from './styles';
import { GlobalContext } from '../../state';
import { Product } from 'types/interfaces';
import { getProducts } from '../../services/products';
import ErrorPanel from 'sharedComponents/ErrorPanel';
import { errors  } from '../../dictionary';
import Loading from 'components/Loading';

const Products = () => {
  const { products, searchTerm, addProducts } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [productsData, setProductsData] = useState<Array<Product>>([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getProducts(searchTerm, pageSize);
      setProductsData(response.results);
      addProducts(response.results);
    } catch (e) {
      if (e instanceof Error) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      setPageSize(pageSize + 10);
      window.scrollTo(0, windowBottomHeight);
    }
  };
  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
  }, [searchTerm, pageSize]);

  useEffect(() => {
  }, [searchTerm, products, pageSize]);

  if (loading) {
    return <Loading />;
  }


  if (error) {
    return (
      <ErrorPanelWrapper>
        <ErrorPanel messages={[ errors.somethingWentWrongText, errors.pleaseTryAgainLaterText ]} />
      </ErrorPanelWrapper>
    );
  }
  return (
    <div>
      <div>
        {productsData && productsData.length > 0 && (
          <NumberContainer>
            {productsData.length} result{productsData.length > 1 && 's'} {searchTerm && <> for "{searchTerm}"</>}
          </NumberContainer>
        )}
        <div>
          {productsData?.length > 0
            ? productsData.map((i: Product, index: number) => (
              <div key={index}>
                <SearchCard item={i} />
              </div>
            ))
            :
            <NoResult searchTerm={searchTerm} />}
        </div>
      </div>
    </div>
  );
};

export default Products;