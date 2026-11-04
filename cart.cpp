#include <iostream>
#include <string>
using namespace std;

struct Product {
    string name;
    double price;
    int quantity;
};

int main() {
    Product products[100];
    int n;
    double total = 0;

    cout << "Number of products (1-100): ";
    cin >> n;

    if (n < 1 || n > 100) {
        cout << "Invalid number of products";
        return 0;
    }

    for (int i = 0; i < n; i++) {
        cout << "\nProduct " << i + 1 << endl;

        cout << "Name: ";
        cin >> products[i].name;

        cout << "Price: ";
        cin >> products[i].price;

        cout << "Quantity: ";
        cin >> products[i].quantity;

        if (products[i].price < 0 ||
            products[i].quantity < 0) {
            cout << "Invalid price or quantity";
            return 0;
        }
    }

    cout << "\n===== RECEIPT =====\n";

    for (int i = 0; i < n; i++) {
        double subtotal =
            products[i].price * products[i].quantity;

        cout << products[i].name
             << " : " << subtotal << " AZN\n";

        total += subtotal;
    }

    cout << "-------------------\n";
    cout << "TOTAL: " << total << " AZN\n";

    return 0;
}
