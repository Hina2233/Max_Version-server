import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-md text-center">
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-48 object-cover ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{ingredients.join(", ")}</p>
        <div className="flex flex-col items-center gap-3">
          {!soldOut ? (
            <p className="text-lg font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-lg font-semibold text-red-500">Sold out</p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
